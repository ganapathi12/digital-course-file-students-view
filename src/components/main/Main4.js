import './Main.css'
import React from 'react'
import 'file-viewer'
import { storage } from '../../fire'
import Axios from 'axios'
import fileDownload from 'js-file-download'
import { Link } from "react-router-dom";
import img1 from './11.png'

const Main4 = ({ currentFile }) => {
  console.log(currentFile.url)
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
  
  return (
    <main>
      <div className='cardss'>
      <h2><Link onClick={download}>Click to download the file!!!</Link></h2>
        <img src={img1} height='75%' width='60%' ></img>
      </div>
    </main>
  )
}

export default Main4
