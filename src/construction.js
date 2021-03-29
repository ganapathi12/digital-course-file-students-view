import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom'
import Background from './Background'

export default function Construction() {
  let match = useRouteMatch()

  return (
    <div>
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Background />
        </Route>
        <Route path={match.path}>
          <h3>No folderId is provided.</h3>
        </Route>
      </Switch>
    </div>
  )
}

// function Topic() {
//   let { topicId } = useParams()
// //   return <h3>Requested Folder ID: {topicId}</h3>
// <Background/>
// }
