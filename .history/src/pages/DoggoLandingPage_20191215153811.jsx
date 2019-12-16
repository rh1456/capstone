import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '.Logo.png'

const DoggoLandingPage = () => {
  return (
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
  )
}

export default DoggoLandingPage
