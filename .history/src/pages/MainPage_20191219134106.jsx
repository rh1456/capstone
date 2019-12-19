import React from 'react'

const MainPage = () => {
  return (
    <div className="news-feed-body">
      <section className="h1-container">
        <h1 className="matches-h1">Matches</h1>
      </section>
      <header className="newsfeed-header">
        <button className="feed-head-left-button">
          <i class="fas fa-angle-left"></i>
        </button>
        <div className="friend-card"></div>
        <button className="feed-head-right-button">
          <i class="fas fa-angle-right"></i>
        </button>
      </header>
      <section className="welcome-user-message">
        <h1 className="welcome-h1">Welcome</h1>
      </section>
      <section className="newsfeed"></section>
    </div>
  )
}

export default MainPage
