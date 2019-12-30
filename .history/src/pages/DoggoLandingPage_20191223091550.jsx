import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Logo from './Logo.png'
import CreateAccount from './CreateAccount'

const DoggoLandingPage = () => {
  return (
    <Router>
      <main className="doggo-landing-body">
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
          <Link to="/">Existing Users Click Here</Link>
        </section>
      </main>
      <Switch>
        <Route exact path="/" component={CreateAccount}></Route>
      </Switch>
    </Router>
  )
}

export default DoggoLandingPage
