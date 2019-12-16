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
      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header class="masthead mb-auto">
          <div class="inner">
            <h3 class="masthead-brand">Cover</h3>
            <nav class="nav nav-masthead justify-content-center">
              <a class="nav-link active" href="#">
                Home
              </a>
              <a class="nav-link" href="#">
                Features
              </a>
              <a class="nav-link" href="#">
                Contact
              </a>
            </nav>
          </div>
        </header>

        <main role="main" class="inner cover">
          <h1 class="cover-heading">Cover your page.</h1>
          <p class="lead">
            Cover is a one-page template for building simple and beautiful home
            pages. Download, edit the text, and add your own fullscreen
            background photo to make it your own.
          </p>
          <p class="lead">
            <a href="#" class="btn btn-lg btn-secondary">
              Learn more
            </a>
          </p>
        </main>

        <footer class="mastfoot mt-auto">
          <div class="inner"></div>
        </footer>
      </div>
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
