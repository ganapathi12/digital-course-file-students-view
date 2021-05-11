import './Main.css'
import FileViewer from 'react-file-viewer'
import { useFolder2 } from '../../hooks/useFolder2'
import React, { useState, useEffect } from 'react'
import { storage, storageRef, firestore1, database } from '../../fire'
import Axios from 'axios'
import fileDownload from 'js-file-download'
import 'file-viewer'
import Loader from 'react-loader-spinner'
import Main3 from './Main3'
import Main4 from './Main4'
import Main5 from './Main5'



const Main2 = ({ filename }) => {
  //console.log(currentFile.name);
  const { currentFile } = useFolder2(filename)
  //console.log(currentFile.url)
  const [file, setFile] = useState('')
  // setFile(currentFile)

  // if (currentFile.length!=0) {
  //   console.log("hi test");
  //   setFile(currentFile)
  // }

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

  // if (currentFile) {
  //   // console.log("hi");
  //     return (
  //       <>
  //         <div className='centered'>
  //           <Loader
  //             type='Puff'
  //             color='#00BFFF'
  //             height={100}
  //             width={100}
  //             timeout={3000} //3 secs
  //           />
  //         </div>
  //       </>
  //     )
  //   }

  let x=''+currentFile.name

  if(x.includes(".png") || x.includes(".jpeg") || x.includes(".jpg") ){
    console.log(currentFile,"test");
    return <Main3 currentFile={currentFile}></Main3>
  }
  if(x.includes(".docx")||x.includes(".doc") ){
    return <Main5 currentFile={currentFile}></Main5>
  }
  else{
    return <Main4 currentFile={currentFile}></Main4>
    
  }

  
}

export default Main2
