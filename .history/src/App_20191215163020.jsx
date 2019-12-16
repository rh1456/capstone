import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import MainPage from './pages/MainPage'
import DoggoLandingPage from './pages/DoggoLandingPage'
import CreateAccount from './pages/CreateAccout'

import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage}></Route>
        <Route exact path="/1" component={DoggoLandingPage}></Route>
        <Route exact path="/2" component={CreateAccount}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
