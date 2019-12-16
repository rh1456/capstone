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
      </section>
    </div>
  )
}

export default CreateAccout
