import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Logo from './Logo.png'
import CreateAccout from './CreateAccout'
const DoggoLandingPage = () => {
  return (
    <Router>
      <div>
        <header className="landing-page-logo">
          <img className="doggo-logo" src={Logo} alt="Doggo Loggo" />
        </header>
        <section className="doggo-text-section">
          <h1 className="doggo-text">Doggo</h1>
        </section>
        <section className="landing-button">
          <button className="create-account">Create Account</button>
        </section>
        <section className="existing-users">
          <Link to="/2">Existing Users Click Here</Link>
        </section>
      </div>
      <Switch>
        <Route exact path="/2" component={CreateAccout}></Route>
      </Switch>
    </Router>
  )
}

export default DoggoLandingPage
