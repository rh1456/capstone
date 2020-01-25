import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import MainPage from './pages/MainPage'
import DoggoLandingPage from './pages/DoggoLandingPage'
import CreateAccount from './pages/CreateAccount'
import DogProfile from './pages/DogProfile'
import PlayDateForm from './pages/PlayDateForm'
import ProfileSettings from './pages/ProfileSettings'
const App = () => {
  return (
    <Router>
      <header>
        <nav>
          <ul className="nav-bar-ul">
            <li className="nav-logo">Doggo</li>
            <li className="main-nav-li">
              <Link className="Nav-link" to="/">
                Login
              </Link>
            </li>
            <li className="main-nav-li">
              <Link className="Nav-link" to="/1">
                Home
              </Link>
            </li>
            <li className="main-nav-li">
              <Link className="Nav-link" to="/2">
                Account
              </Link>
            </li>
            <li className="main-nav-li">
              <Link className="Nav-link" to="/3">
                Z's Profile
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={DoggoLandingPage}></Route>
        <Route exact path="/1" component={MainPage}></Route>
        <Route exact path="/2" component={CreateAccount}></Route>
        <Route path="/3" component={DogProfile}></Route>
        <Route path="/4" component={PlayDateForm}></Route>
        <Route path="/5" component={ProfileSettings}></Route>
        <Route path="/6" component={LoginPage}></Route>
      </Switch>
    </Router>
  )
}

export default App
