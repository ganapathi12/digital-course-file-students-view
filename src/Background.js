import React from 'react'
import { useParams } from 'react-router-dom'

export default function Background() {
  let { topicId, fileid } = useParams()
  return (
    <div className='App'>
      <div className='container'>
        <h1>
          Website
          <br />
          Under Construction Coming Soon...
          <br />
          Requested FolderID: {topicId}
          Requested fileid: {fileid}
        </h1>
      </div>
    </div>
  )
}
