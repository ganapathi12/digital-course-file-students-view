import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
// import Home from './Home'
// import About from './About'
import Construction from './Construction'
import Path from './Path1'
import Home from './Home'

export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/folders'>
            <Construction />
          </Route>
          <Route path='/assignment'>
            <Path />
          </Route> 
        </Switch>
      </div>
    </Router>
  )
}
