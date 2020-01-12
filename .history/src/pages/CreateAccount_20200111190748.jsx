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
    <div className="create-account-div">
      <h1>Create Account</h1>
      <section className="create-account-details">
        <label htmlFor="dogs-name"></label>
        <input type="text" placeholder="Name of Pup"></input>
      </section>
      <section className="create-account-details">
        <label htmlFor="gender">Gender</label>
        <select type="text" placeholder="Gender">
          <option value="">---</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </section>
      <section className="create-account-details">
        <label htmlFor="Age">Age</label>
        <input input="text"></input>
      </section>
      <section className="create-account-details">
        <label htmlFor="Breed">Breed</label>
        <input input="text"></input>
      </section>
      <section className="create-account-details">
        <label htmlFor="size">Size</label>
        <select type="text">
          <option value="">Selct Breed</option>
          <option value="small">Small</option>
        </select>
        <section className="create-account-details">
          <label htmlFor="energy">Energy-Level</label>
          <select type="text">
            <option value="">Select Level</option>
            <option value="hyper">Hyper</option>
            <option value="tame">Tame</option>
          </select>
          <section className="create-account-details">
            <label htmlFor="img">Upload Your Pup's Pic</label>
            <input type="url"></input>
          </section>
          <section className="create-account-details">
            <label htmlFor="About">About</label>
            <input className="about-me-text" type="text"></input>
          </section>
          <section className="create-account-details"></section>
          <label htmlFor="username">Email</label>
          <input type="text"></input>
        </section>
      </section>
      <button className="submit-account">Submit</button>
    </div>
  )
}

export default CreateAccount
