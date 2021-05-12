import './Main.css'
import React from 'react'
import 'file-viewer'
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { storage } from '../../fire'
import Axios from 'axios'
import fileDownload from 'js-file-download'
import { Link } from 'react-router-dom'

const Main3 = ({ currentFile }) => {
  console.log(currentFile)
  function download() {
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
      <div className='car'>
        <h2>
          <Link onClick={download} style={{ alignItems: 'center' }}>
            Click to download the Image!!!
          </Link>
        </h2>
      </div>

      <div className='cards'>
        <br></br>
        <Image src={currentFile.url} thumbnail />
      </div>
    </main>
  )
}

export default Main3
