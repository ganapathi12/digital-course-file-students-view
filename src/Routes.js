import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Home from './Home'
// import About from './About'
import Construction from './Construction'
import Path from './Path1'
import Lander from './Lander'

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
          <Route path='/'>
            <Lander />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
