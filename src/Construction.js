import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import App from './App'

export default function Construction() {
  let match = useRouteMatch()

  return (
    <div>
      <Switch>
        <Route path={`${match.path}/:topicId/:fileid/:filename`}>
          <App />
        </Route>
        <Route path={`${match.path}/:topicId/:fileid`}>
          <App />
        </Route>
        <Route path={match.path}>
          <h3>No folderId is provided.</h3>
        </Route>
      </Switch>
    </div>
  )
}
