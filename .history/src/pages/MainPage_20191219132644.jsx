import React from 'react'

const MainPage = () => {
  return (
    <div className="news-feed-body">
      <h1>SOMTHING</h1>
      <header className="newsfeed-header">
        <button className="feed-head-left-button">
          <i class="fas fa-angle-left"></i>
        </button>
        <div className="friend-card"></div>
        <button className="feed-head-right-button">
          <i class="fas fa-angle-right"></i>
        </button>
      </header>
      <section className="newsfeed"></section>
    </div>
  )
}

export default MainPage
