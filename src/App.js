import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Construction from './construction'

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/folders'>
            <Construction />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
