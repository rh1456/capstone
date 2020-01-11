import React from 'react'

const ProfileSettings = () => {
  return (
    <div className="profile-settings-container">
      <header className="setting-header">
        <span>Dog's Name</span>'s Profile
      </header>
      <section className="setings-section">
        <p className="settings-p">Settings</p>
      </section>
      <section className="update-account-details">
        <label htmlFor="dogs-name">Update Name</label>
        <input
          className="basic-slide"
          type="text"
          placeholder="Update Name"
        ></input>
      </section>
      <section className="update-account-details">
        <label htmlFor="gender">Update Gender</label>
        <select className="basic-slide" type="text">
          <option value="">---</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <section className="update-account-details">
          <label htmlFor="Age">Age</label>
          <input className="basic-slide" input="text"></input>
        </section>
      </section>
    </div>
  )
}

export default ProfileSettings
