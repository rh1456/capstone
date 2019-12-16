import React from 'react'
import Z from './z-pic.jpg'
const DogProfile = () => {
  return (
    <div className="dogprofile-div">
      <header className="dog-profile-image">
        <img src={Z} alt="Z" />
      </header>
      <section className="profile-about">
        <h1>Liz</h1>
      </section>
    </div>
  )
}

export default DogProfile
