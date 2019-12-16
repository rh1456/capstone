import React from 'react'

const DoggoLandingPage = () => {
  return (
    <div>
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
        <Link to="/1">Existing Users Click Here</Link>
      </section>
    </div>
  )
}

export default DoggoLandingPage
