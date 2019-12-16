import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import DoggoLandingPage from './pages/DoggoLandingPage'
import Logo from './Logo.png'
// import Page from './pages/Page'
// import Page2 from './pages/Page2'
// import DoggoLandingPage from './pages/DoggoLandingPage'
// import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <>
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
      </>

      <Switch>
        <Route exact path="/" component={DoggoLandingPage}></Route>

        {/* //     <Route exact path="/1" component={Page}></Route>
         <Route exact path="/2" component={Page2}></Route>
         <Route path="*" component={NotFound}></Route> */}
      </Switch>
    </Router>
  )
}

export default App
