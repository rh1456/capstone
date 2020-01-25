import Z from './z-pic.jpg'
import Logo from './Logo.png'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const DogProfile = () => {
  const [users, setUsers] = useState({})

  const getProfileData = async event => {
    const resp = await Axios.get(
      `https://localhost:5001/api/User/${props.match.params.id}`
    )

    setUsers(resp.data)
  }

  useEffect(() => {
    getProfileData()
  }, [])

  return (
    <div className="dog-profile-div">
      <header className="dog-profile-image">
        <img className="profile-image" src={Z} alt="Z" />
      </header>
      <section className="profile-about">
        <h1>{user.name}</h1>
        <span>Young</span>
        <span>Labrador/Pit Mix</span>
      </section>
      <section className="in-between">
        <img className="profile-logo" src={Logo} alt="" />
      </section>
      <section className="main-about">
        <h1>About</h1>
        <li>Size: Medium</li>
        <li>Gender: Female</li>
        <li>Age: Young</li>
        <li>Temperament: Friendly/Energentic</li>
      </section>
      <section className="meet">
        <img className="small-pro-pic" src={Z} alt="Z" />
        <h1>Meet Liz!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          dolores laboriosam, nihil, optio explicabo delectus dicta expedita
        </p>
        <button className="match-button">
          <Link className="playdate-link" to="/4">
            Make a Playdate!
          </Link>
        </button>
      </section>
    </div>
  )
}

export default DogProfile
