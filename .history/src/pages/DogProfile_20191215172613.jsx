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
        <span>Labrador/Pit Mix</span>
      </section>
    </div>
  )
}

export default DogProfile
