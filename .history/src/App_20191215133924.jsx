import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import DoggoLandingPage from './pages/DoggoLandingPage'
// import Page from './pages/Page'
// import Page2 from './pages/Page2'
// import DoggoLandingPage from './pages/DoggoLandingPage'
// import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>
      <header className="landing-page-head">
        <h1>Doggo</h1>
        <button>Create Account</button>
      </header>
      <main></main>
    </>
    /* <Switch>
        <Route exact path="/" component={DoggoLandingPage}></Route>
        <Route exact path="/1" component={Page}></Route>
        <Route exact path="/2" component={Page2}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router> */
  )
}

export default App
