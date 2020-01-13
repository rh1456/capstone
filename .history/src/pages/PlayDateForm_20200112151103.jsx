import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
const PlayDateForm = () => {
  return (
    //Drop-down select from available Matches and create playdate using
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
          <label htmlFor="time">What Time?</label>
          <input type="time"></input>
        </section>
        <section className="playdate-input">
          <label htmlFor="where">Where? &nbsp;</label>
          <select type="text">
            <option value="">-----</option>
            <option value="Place 1"> place 1</option>
            <option value="Place 2">Place 2</option>
          </select>
          <section className="create-date-button">
            <button className="form-date-submit-button">Make it a Date</button>
          </section>
        </section>
      </main>
    </div>
  )
}

export default PlayDateForm
