import './Main.css'
import React from 'react'
import 'file-viewer'
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Link } from "react-router-dom";
import { storage } from '../../fire'
import Axios from 'axios'
import fileDownload from 'js-file-download'

const Main5 = ({ currentFile }) => {
//   let x=currentFile.name
function download(){
  var httpsReference = storage.refFromURL(currentFile.url)
  httpsReference
  .getDownloadURL()
  .then((url) => {
  Axios.get(url, {
  responseType: 'blob',
  }).then((res) => {
    fileDownload(res.data, currentFile.name)
    })
    })
    .catch((error) => {
    console.log('ERROR')
  })
}
//   let name = x.split(".")[0]
// let extension = x.split(".")[1]
// localStorage.setItem(name, extension);
  console.log(currentFile)
  return (
    <main>
      <div className='cards'>
        <h2 ><Link onClick={download} style={{alignItems: 'center'}}>Click to download the pdf file!!!</Link></h2>
        <br></br>
        <iframe src={currentFile.url} height='100%'></iframe>
      </div>
    </main>
  )
}

export default Main5
