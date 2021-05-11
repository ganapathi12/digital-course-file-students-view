import './Main.css'
import React from 'react'
import 'file-viewer'
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'

const Main5 = ({ currentFile }) => {
//   let x=currentFile.name

//   let name = x.split(".")[0]
// let extension = x.split(".")[1]
// localStorage.setItem(name, extension);
  console.log(currentFile)
  let url='https://docs.google.com/gview?url='+currentFile.url+'/path/to/document.doc&embedded=true'
  return (
    <main>
      <div className='cards'>
        <iframe src={url} height='100%'></iframe>
      </div>
    </main>
  )
}

export default Main5
