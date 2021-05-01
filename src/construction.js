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
import App from "./App";


export default function Construction() {
  let match = useRouteMatch()

  return (
    <div>
      <Switch>
        <Route path={`${match.path}/:topicId/:fileid`}>
          <App/>
        </Route>
        <Route path={match.path}>
          <h3>No folderId is provided.</h3>
        </Route>
      </Switch>
    </div>
  )
}

