import './Sidebar.css'
import logo from '../../assets/logo.png'
import { useFolder } from '../../hooks/useFolder'
import { v4 as uuidV4 } from 'uuid'
import { database } from '../../fire'
import Loader from 'react-loader-spinner'
import { useState, useReducer, useEffect } from 'react'

const Sidebar = ({ sidebarOpen, closeSidebar ,topicId,fileid}) => {
  
  const { childFiles } = useFolder(
    fileid,
    topicId
  )

  if (childFiles.length == 0) {
    return (
      <>
        <div className='centered'>
          <Loader
            type='TailSpin'
            color='#000000'
            height={50}
            width={50}
            timeout={3000} //3 secs
          />
        </div>
      </>
    )
  }

  return (
    <div className={sidebarOpen ? 'sidebar_responsive' : ''} id='sidebar'>
      <div className='sidebar__title'>
        <div className='sidebar__img'>
          <img src={logo} alt='logo' />
          <h1>&nbsp; &nbsp; DCFS</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className='fa fa-times'
          id='sidebarIcon'
          aria-hidden='true'
        ></i>
      </div>

      <div className='sidebar__menu'>
        <div className='sidebar__link active_menu_link'>
          <i className='fa fa-home'></i>
          <a href='#'>Dashboard</a>
        </div>
        <h2>ALL Files</h2>
        {childFiles.length >= 0 && (
          <div>
            {childFiles.map((childFile) => (
              <div className='sidebar__link' key={childFile.uniqueid}>
                <i className='fa fa-archive'></i>
                <a href='#'>{childFile.name}</a>
              </div>
            ))}
          </div>
        )}
        {/* <div className='sidebar__link'>
          <i className='fa fa-user-secret' aria-hidden='true'></i>
          <a href='#'>Admin Management</a>
        </div>
        <div className='sidebar__link'>
          <i className='fa fa-building-o'></i>
          <a href='#'>Company Management</a>
        </div>
        <div className='sidebar__link'>
          <i className='fa fa-wrench'></i>
          <a href='#'>Employee Management</a>
        </div>
        <div className='sidebar__link'>
          <i className='fa fa-archive'></i>
          <a href='#'>Warehouse</a>
        </div>
        <div className='sidebar__link'>
          <i className='fa fa-handshake-o'></i>
          <a href='#'>Contracts</a>
        </div> */}
      </div>
    </div>
  )
}

export default Sidebar
