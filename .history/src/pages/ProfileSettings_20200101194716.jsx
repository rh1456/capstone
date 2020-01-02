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
    </div>
  )
}

export default ProfileSettings
