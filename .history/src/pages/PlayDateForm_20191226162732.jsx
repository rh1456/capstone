import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
const PlayDateForm = () => {
  return (
    <div>
      <header className="playdate-header">
        Your Playdate With &nbsp;{''}
        <span className="dog-date-name"> Dog's Name</span>
      </header>
      <main className="playdate-main">
        <section className="playdate-input">
          <label htmlFor="when">When?</label>
          <input type="date"></input>
        </section>
        <section className="playdate-input">
          <label htmlFor="time">What Time</label>
          <input type="time"></input>
        </section>
      </main>
    </div>
  )
}

export default PlayDateForm
