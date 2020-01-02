import React from 'react'

const ProfileSettings = () => {
  return (
    <div>
      <header className="setting-header">
        Update <span>Dog's Name</span> Information!
      </header>
      <section className="update-account-details">
        <label htmlFor="dogs-name">Update Name</label>
        <input type="text"></input>
      </section>
      <section className="update-account-details">
        <label htmlFor="gender">Update Gender</label>
      </section>
    </div>
  )
}

export default ProfileSettings
