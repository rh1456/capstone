import React from 'react'
import './profileSettings.css'

const ProfileSettings = () => {
  return (
    <>
      <header className="setting-header">
        <span>Dog's Name</span>'<p className="settings-p">Settings</p>
      </header>
      <div className="profile-settings-container">
        <section className="update-account-details">
          <label className="update-label" htmlFor="dogs-name">
            {/* Update Name */}
          </label>
          <input
            className="basic-slide"
            type="text"
            placeholder="Update Name"
          ></input>
        </section>
        <section className="update-account-details">
          <label className="update-label" htmlFor="gender">
            {/* Update Gender */}
          </label>
          <select
            placeholder="Update Gender"
            className="basic-slide"
            type="text"
          >
            <option value="">Update Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </section>
        <section className="update-account-details">
          <label className="update-label" htmlFor="Age">
            {/* Age */}
          </label>
          <input
            placeholder="Age"
            className="basic-slide"
            type="number"
          ></input>
        </section>
      </div>
    </>
  )
}

export default ProfileSettings
