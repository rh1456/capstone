import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

const MainPage = () => {
  return (
    <div className="news-feed-body">
      <section className="h1-container">
        <h1 className="matches-h1">Matches</h1>
      </section>
      <header className="newsfeed-header">
        <button className="friend-card">
          <Link to="/3">Match</Link>
        </button>
        <button className="friend-card">
          <Link to="/3">Match</Link>
        </button>
        <button className="friend-card">
          <Link to="/3">Match</Link>
        </button>
        <button className="friend-card">
          <Link to="/3">Match</Link>
        </button>
      </header>
      <section className="welcome-user-message">
        <h1 className="welcome-h1">
          Welcome <span>Liz</span>{' '}
          <span>
            <i class="fas fa-paw"></i>
          </span>
        </h1>
      </section>
      <nav>
        <ul className="newsfeed-nav-ul">
          <li className="newsfeed-nav-li">
            <Link className="settings-link" to="/5">
              Profile Settings
            </Link>
          </li>
          <li className="newsfeed-nav-li">Upcoming Play Dates</li>
          <li className="newsfeed-nav-li">Past Play Dates</li>
        </ul>
      </nav>
      <div className="newsfeed-parent">
        <div className="newsfeed">
          <div class="card">
            <h2>Friend</h2>
            <span>status</span>
          </div>
          <div class="card">
            <h2>Friend</h2>
            <span>status</span>
          </div>
          <div class="card">
            <h2>Friend</h2>
            <span>status</span>
          </div>
          <div class="card">
            <h2>Friend</h2>
            <span>status</span>
          </div>
          <div class="card">
            <h2>Friend</h2>
            <span>status</span>
          </div>
        </div>
        <div className="mapbox"></div>
      </div>
    </div>
  )
}

export default MainPage
