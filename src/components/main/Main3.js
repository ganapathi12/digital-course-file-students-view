import './Main.css'
import React from 'react'
import 'file-viewer'
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'

const Main3 = ({ currentFile }) => {
  console.log(currentFile)
  return (
    <main>
      <div className='cards'>
        <Image src={currentFile.url} thumbnail />
      </div>
    </main>
  )
}

export default Main3
