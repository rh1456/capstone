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
          <option value=""></option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </section>
      <section className="create-account-details">
        <label className="create-label" htmlFor="Age"></label>
        <input className="create-input" placeholder="Age" input="text"></input>
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
        <section className="create-account-details">
          <label className="create-label" htmlFor="energy"></label>
          <select className="create-input" type="text">
            <option value="">Select Level</option>
            <option value="hyper">Hyper</option>
            <option value="tame">Tame</option>
          </select>
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
          <section className="create-account-details"></section>
          <label className="create-label" htmlFor="username"></label>
          <input
            placeholder="Email"
            className="create-input"
            type="text"
          ></input>
        </section>
      </section>
      <button className="submit-account">Submit</button>
    </div>
  )
}

export default CreateAccount
