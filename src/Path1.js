import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Assignment from './Assignment'

export default function Path1() {
  let match = useRouteMatch()

  return (
    <div>
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Assignment />
        </Route>
        <Route path={match.path}>
          <h3>No AssignmentId is provided.</h3>
        </Route>
      </Switch>
    </div>
  )
}