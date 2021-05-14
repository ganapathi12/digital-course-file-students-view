import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Feedback from './Feedback.js'

export default function Path1() {
  let match = useRouteMatch()

  return (
    <div>
      <Switch>
        <Route path={`${match.path}/:topicId`}>
            {console.log('init')}
          <Feedback />
        </Route>
        <Route path={match.path}>
          <h3>No FeedbackID is provided.</h3>
        </Route>
      </Switch>
    </div>
  )
}