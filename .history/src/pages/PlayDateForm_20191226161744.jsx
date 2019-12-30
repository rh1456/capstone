import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
const PlayDateForm = () => {
  return (
    <div>
      <header className="playdate-header">
        Your Playdate With &nbsp;{' '}
        <span className="dog-date-name"> Dog's Name</span>
      </header>
    </div>
  )
}

export default PlayDateForm
