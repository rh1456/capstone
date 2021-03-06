import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './createAccount.css'

const CreateAccount = () => {
  const [name, setName] = useState('')
  // const [gender, setGender] = useState('')
  // const [age, setAge] = useState('')
  const [breed, setBreed] = useState('')
  const [size, setSize] = useState('')
  const [about, setAbout] = useState('')
  const [energyLevels, setEnergyLevels] = useState([])
  const [energyLevelId, setEnergyLevelId] = useState()

  const submitData = async event => {
    event.preventDefault()
    const resp = await axios.post('https://localhost:5001/api/User/', {
      name: name,
      breed: breed,
      // genderId: parseInt(genderId),
      about: about,
      size: size,
      energyLevelId: parseInt(energyLevelId),
    })
    console.log(resp.data)
  }

  const getEnergyLevelData = async () => {
    const resp = await axios.get('https://localhost:5001/api/EnergyLevel')
    console.log(resp.data)
    setEnergyLevels(resp.data)
  }
  useEffect(() => {
    getEnergyLevelData()
  }, [])

  return (
    <>
      <section className="create-account-head">
        <h1 className="create-account-h1">Create Account</h1>
      </section>
      <div className="create-account-div">
        <form
          onSubmit={e => {
            submitData(e)
          }}
        >
          <section className="create-account-details">
            <label className="create-label" htmlFor="dogs-name"></label>
            <input
              className="create-input"
              placeholder="Name of Pup"
              onChange={e => {
                setName(e.target.value)
              }}
              value={name}
              type="text"
            ></input>
          </section>
          {/* <section className="create-account-details">
            <label className="create-label" htmlFor="gender"></label>
            <select className="create-input" type="text" placeholder="Gender">
              <option value="selectGender">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </section> */}
          {/* <section className="create-account-details">
            <label className="create-label" htmlFor="age"></label>
            <select className="create-input" type="text">
              <option value="age">Age</option>
              <option value="Puppy">Shy</option>
              <option value="Adult">Friendly</option>
              <option value="Senior">Risky</option>
            </select>
          </section> */}
          <section className="create-account-details">
            <label className="create-label" htmlFor="Breed"></label>
            <input
              className="create-input"
              placeholder="Breed"
              input="text"
              onChange={e => {
                setBreed(e.target.value)
              }}
              value={breed}
              input="text"
            ></input>
          </section>
          <section className="create-account-details">
            <label className="create-label" htmlFor="Size"></label>
            <input
              className="create-input"
              placeholder="Size"
              onChange={e => {
                setSize(e.target.value)
              }}
              value={size}
              type="text"
            ></input>
          </section>
          <section className="create-account-details">
            <label className="create-label" htmlFor="energy"></label>
            <select
              onChange={e => {
                setEnergyLevelId(e.target.value)
              }}
              text="dropdown"
              className="create-input"
            >
              <option>Select Your Dog's Energy Level</option>
              {energyLevels.map(energyLevel => {
                return (
                  <option value={energyLevel.Id}>{energyLevel.level}</option>
                )
              })}
            </select>
          </section>
          {/* <section className="create-account-details">
            <label className="create-label" htmlFor="interested"></label>
            <select className="create-input" type="text">
              <option value="">Interested in Energy Level</option>
              <option value="shy">Shy</option>
              <option value="friendly">Friendly</option>
              <option value="Risky">Risky</option>
            </select>
          </section> */}
          {/* <section className="create-account-details">
            <label className="create-label" htmlFor="img"></label>
            <input
              placeholder="Upload Pic"
              className="create-input"
              type="url"
            ></input>
          </section> */}
          <section className="create-account-details">
            <label className="create-label" htmlFor="About"></label>
            <input
              className="create-input"
              placeholder="About"
              type="text"
            ></input>
          </section>
          {/* <section className="create-account-details">
            <label className="create-label" htmlFor="username"></label>
            <input
              placeholder="Email"
              className="create-input"
              type="text"
            ></input>
          </section> */}
          <button className="submit-account">Submit</button>
        </form>
      </div>
    </>
  )
}

export default CreateAccount
