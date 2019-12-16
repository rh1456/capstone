import React from 'react'

const CreateAccout = () => {
  return (
    <div className="create-account-div">
      <h1>Create Account</h1>
      <section className="create-account-details">
        <label htmlFor="dogs-name">Name of Pup</label>
        <input type="text"></input>
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
            <inpu type="text"></inpu>
          </section>
        </section>
      </section>
    </div>
  )
}

export default CreateAccout
