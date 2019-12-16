import React from 'react'
import Z from './z-pic.jpg'
import Logo from './Logo.png'
const DogProfile = () => {
  return (
    <div className="dog-profile-div">
      <header className="dog-profile-image">
        <img className="profile-image" src={Z} alt="Z" />
      </header>
      <section className="profile-about">
        <h1>Liz</h1>
        <span>Young</span>
        <span>Labrador/Pit Mix</span>
      </section>
      <section className="in-between">
        <img src={Logo} alt="" />
      </section>
    </div>
  )
}

export default DogProfile
