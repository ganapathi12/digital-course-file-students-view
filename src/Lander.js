import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Landernav from './Landernav'
import home from './images/home.svg'
import Common from './Common'

const Lander = () => {
  return (
    <>
      <Landernav />
      <Common
        name='Welcome To'
        imgsrc={home}
        isCompName={true}
        compName='Digital Course File System'
        visit='https://digital-course-file.netlify.app/'
        btnname='Teachers View'
      />
    </>
  )
}

export default Lander
