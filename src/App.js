import { useState } from 'react'
import './App.css'
import Main from './components/main/Main'
import Main2 from './components/main/Main2'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import { useParams } from 'react-router-dom'

const App = () => {
  let { topicId, fileid,filename } = useParams()
  //console.log(filename);
  const [sidebarOpen, setsidebarOpen] = useState(false)
  
  const openSidebar = () => {
    setsidebarOpen(true)
  }
  const closeSidebar = () => {
    setsidebarOpen(false)
  }
  return (
    <div className='container'>
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      {filename && <Main2 filename={filename} />}
      {!filename && <Main filename={filename} />}
      {/* <Main filename={filename} /> */}
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} fileid={fileid} topicId={topicId}/>
    </div>
  )
}

export default App
