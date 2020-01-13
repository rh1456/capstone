import React, { useEffect, useState } from 'react'
import './createAccount.css'

const CreateAccount = () => {
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')
  const [breed, setBreed] = useState('')
  const [size, setSize] = useState('')
  const [about, setAbout] = useState('')
  const [email, setEmail] = useState('')
  return (
    <>
      <section className="create-account-head">
        <h1 className="create-account-h1">Create Account</h1>
      </section>
      <div className="create-account-div">
        <section className="create-account-details">
          <label className="create-label" htmlFor="dogs-name"></label>
          <input
            className="create-input"
            type="text"
            placeholder="Name of Pup"
          ></input>
        </section>
        <section className="create-account-details">
          <label className="create-label" htmlFor="gender"></label>
          <select className="create-input" type="text" placeholder="Gender">
            <option value="selectGender">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </section>
        <section className="create-account-details">
          <label className="create-label" htmlFor="age"></label>
          <select className="create-input" type="text">
            <option value="age">Age</option>
            <option value="Puppy">Shy</option>
            <option value="Adult">Friendly</option>
            <option value="Senior">Risky</option>
          </select>
        </section>
        <section className="create-account-details">
          <label className="create-label" htmlFor="Breed"></label>
          <input
            className="create-input"
            placeholder="Breed"
            input="text"
          ></input>
        </section>
        <section className="create-account-details">
          <label className="create-label" htmlFor="size"></label>
          <select className="create-input" type="text">
            <option value="">Select Size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </section>
        <section className="create-account-details">
          <label className="create-label" htmlFor="energy"></label>
          <select className="create-input" type="text">
            <option value="">Select Level</option>
            <option value="shy">Shy</option>
            <option value="friendly">Friendly</option>
            <option value="Risky">Risky</option>
          </select>
        </section>
        <section className="create-account-details">
          <label className="create-label" htmlFor="interested"></label>
          <select className="create-input" type="text">
            <option value="">Interested in Energy Level</option>
            <option value="shy">Shy</option>
            <option value="friendly">Friendly</option>
            <option value="Risky">Risky</option>
          </select>
        </section>
        <section className="create-account-details">
          <label className="create-label" htmlFor="img"></label>
          <input
            placeholder="Upload Pic"
            className="create-input"
            type="url"
          ></input>
        </section>
        <section className="create-account-details">
          <label className="create-label" htmlFor="About"></label>
          <input
            className="create-input"
            placeholder="About"
            type="text"
          ></input>
        </section>
        <section className="create-account-details">
          <label className="create-label" htmlFor="username"></label>
          <input
            placeholder="Email"
            className="create-input"
            type="text"
          ></input>
        </section>
      </div>
      <button className="submit-account">Submit</button>
    </>
  )
}

export default CreateAccount
