import './Main.css'
import React from 'react'
import 'file-viewer'
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'

const Main4 = ({ currentFile }) => {
  //console.log(currentFile)
  return (
    <main>
      <div className='cards'>
        <embed src={currentFile.url} height='100%'></embed>
      </div>
    </main>
  )
}

export default Main4
