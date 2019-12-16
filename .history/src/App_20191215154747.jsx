import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import DoggoLandingPage from './pages/DoggoLandingPage'
import Logo from './pages/Logo.png'
import CreateAccount from './pages/CreateAccout'
import Page2 from './pages/Page2'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <>
        <DoggoLandingPage></DoggoLandingPage>
      </>

      <Switch>
        {/* <Route exact path="/" component={DoggoLandingPage}></Route> */}
        <Route exact path="/1" component={CreateAccount}></Route>
        <Route exact path="/2" component={Page2}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
