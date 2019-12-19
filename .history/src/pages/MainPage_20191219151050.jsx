import React from 'react'

const MainPage = () => {
  return (
    <div className="news-feed-body">
      <section className="h1-container">
        <h1 className="matches-h1">Matches</h1>
      </section>
      <header className="newsfeed-header">
        <div className="friend-card">Match</div>
        <div className="friend-card">Match</div>
        <div className="friend-card">Match</div>
        <div className="friend-card">Match</div>
      </header>
      <section className="welcome-user-message">
        <h1 className="welcome-h1">
          Welcome <span>Liz</span>{' '}
          <span>
            <i class="fas fa-paw"></i>
          </span>
        </h1>
      </section>
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
      </div>
    </div>
  )
}

export default MainPage
