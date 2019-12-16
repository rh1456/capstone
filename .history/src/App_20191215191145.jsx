import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import MainPage from './pages/MainPage'
import DoggoLandingPage from './pages/DoggoLandingPage'
import CreateAccount from './pages/CreateAccout'
import DogProfile from './pages/DogProfile'

const App = () => {
  return (
    <Router>
      <header>
        <nav>
          <ul className="nav-bar-ul">
            <li>Doggo</li>
            <li>
              <Link className="Nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="Nav-link" to="/1">
                Login
              </Link>
            </li>
            <li>
              <Link className="Nav-link" to="/2">
                Create Account
              </Link>
            </li>
            <li>
              <Link className="Nav-link" to="/3">
                Z's Profile
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={MainPage}></Route>
        <Route exact path="/1" component={DoggoLandingPage}></Route>
        <Route exact path="/2" component={CreateAccount}></Route>
        <Route path="/3" component={DogProfile}></Route>
      </Switch>
    </Router>
  )
}

export default App
