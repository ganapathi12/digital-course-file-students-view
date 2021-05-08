import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ReactDOM from 'react-dom'
import { storage, database } from './fire.js'
import { v4 as uuidV4 } from 'uuid'
import { ProgressBar, Toast } from 'react-bootstrap'

let b=true;
export default function UplodeAssg({topicId, sid, sendDataToParent}) {
 const [uploadingFiles, setUploadingFiles] = React.useState([]) 
 console.log("inside uplode:");
 
 function change(){
  b=!b;
  sendDataToParent(b)
 }
 function changeHandler(e){
  const file = e.target.files[0]
    if (topicId == null || file == null) return

    const id = uuidV4()
    setUploadingFiles((prevUploadingFiles) => [
      ...prevUploadingFiles,
      { id: id, name: file.name, progress: 0, error: false },
    ])
    const uniqueid = uuidV4()

    const uploadTask = storage
      .ref(`/a_files/${topicId}/${uniqueid}`)
      .put(file)

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = snapshot.bytesTransferred / snapshot.totalBytes
        setUploadingFiles((prevUploadingFiles) => {
          return prevUploadingFiles.map((uploadFile) => {
            if (uploadFile.id === id) {
              return { ...uploadFile, progress: progress }
            }

            return uploadFile
          })
        })
      },
      () => {
        setUploadingFiles((prevUploadingFiles) => {
          return prevUploadingFiles.map((uploadFile) => {
            if (uploadFile.id === id) {
              return { ...uploadFile, error: true }
            }
            return uploadFile
          })
        })
      },
      () => {
        setUploadingFiles((prevUploadingFiles) => {
          return prevUploadingFiles.filter((uploadFile) => {
            return uploadFile.id !== id
          })
        })

        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          database.a_files
            .where('name', '==', file.name)
            .where('folderId', '==', topicId)
            .get()
            .then((existingFiles) => {
              const existingFile = existingFiles.docs[0]
              if (existingFile) {
                existingFile.ref.update({ url: url })
              } else {
                database.a_files.add({
                  url: url,
                  name: file.name,
                  uniqueid: uniqueid,
                  createdAt: database.getTime(),
                  folderId: topicId,
                  Sid: sid
                })
              }
            })
        })
      }
    )
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Uplode your work here
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
            <input type="file" name="file" onChange={changeHandler} />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox onChange={change} color="secondary" name="saveCard" value="yes" required />}
            label="I have not copied my work"
          />
        </Grid>
      </Grid>
      {uploadingFiles.length > 0 &&
        ReactDOM.createPortal(
          <div
            style={{
              position: 'absolute',
              bottom: '4rem',
              right: '2rem',
              maxWidth: '250px',
            }}
          >
            {uploadingFiles.map((file) => (
              <Toast
                key={file.id}
                onClose={() => {
                  setUploadingFiles((prevUploadingFiles) => {
                    return prevUploadingFiles.filter((uploadFile) => {
                      return uploadFile.id !== file.id
                    })
                  })
                }}
              >
                <Toast.Header
                  closeButton={file.error}
                  className='text-truncate w-100 d-block'
                >
                  {file.name}
                </Toast.Header>
                <Toast.Body>
                  <ProgressBar
                    animated={!file.error}
                    variant={file.error ? 'danger' : 'primary'}
                    now={file.error ? 100 : file.progress * 100}
                    label={
                      file.error
                        ? 'Error'
                        : `${Math.round(file.progress * 100)}%`
                    }
                  />
                </Toast.Body>
              </Toast>
            ))}
          </div>,
          document.body
        )}
    </React.Fragment>
    
  );
}