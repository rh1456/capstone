import React from 'react'
import Z from './z-pic.jpg'
const DogProfile = () => {
  return (
    <div className="dog-profile-div">
      <header className="dog-profile-image">
        <img className="profile-image" src={Z} alt="Z" />
      </header>
      <section className="profile-about">
        <h1>Liz</h1>
        <section className="about-info">
          <span>Young</span>
          <span>Labrador/Pit Mix</span>
        </section>
      </section>
    </div>
  )
}

export default DogProfile
