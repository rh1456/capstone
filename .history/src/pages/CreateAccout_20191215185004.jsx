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
          <option value="">-----</option>
          <option value="small"></option>
        </select>
      </section>
    </div>
  )
}

export default CreateAccout
