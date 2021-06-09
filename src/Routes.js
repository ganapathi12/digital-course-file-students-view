import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Home from './Home'
// import About from './About'
import Construction from './Construction'
import Path from './Path1'
import Path1 from './Path2'

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
          <Route path='/feedback'>
            <Path1 />
          </Route>
          <Route exact path="/" render={() => (window.location = "https://dcfshome.netlify.app/")} />
        </Switch>
      </div>
    </Router>
  )
}
