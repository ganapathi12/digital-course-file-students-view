import './Main.css'
import FileViewer from 'react-file-viewer'
import { useFolder2 } from '../../hooks/useFolder2'
import React, { useState,useEffect } from 'react'
import { storage, storageRef, firestore1, database } from '../../fire'
import Axios from 'axios'
import fileDownload from 'js-file-download'
import "file-viewer";


const Main2 = ({ filename }) => {
  //console.log(currentFile.name);
  const { currentFile } = useFolder2(filename)
  //console.log(currentFile.url)
  const [file, setFile] = useState('')
  
// useEffect(() => {
//   const timer = () => {
//     Axios.get(currentFile.url, {
//           responseType: 'blob',
//         }).then((res) => {
//           //fileDownload(res.data, props.fileName)
//           //file=res.data
//           setFile(res.data)
//           console.log(file);
//           fileDownload(res.data, currentFile.name)
//         })
//       .catch((error) => {
//         console.log('ERROR')
//       })
//   };
//   timer()
//   return () => clearTimeout(timer);
// }, [currentFile]);

  return (
    <main>
      {/* {(typeof(currentFile)!=undefined) && (
      <FileViewer fileType='csv' filePath={file} />
    )} */}
    {/* <FileViewer fileType="jpeg" filePath={currentFile.url} /> */}
    <file-viewer
        filename={currentFile.name}
        url={currentFile.url}
      />
    </main>
    
    
  )
}

export default Main2
