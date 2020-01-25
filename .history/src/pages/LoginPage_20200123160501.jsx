import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import './loginPage.css'

const LoginPage = () => {
  const [successfullyCreated, setSuccessfullyCreated] = useState(false)
  const [usernameFromApi, setUsernameFromApi] = useState('')
  const [user, setUser] = useState({
    username: '',
    password: '',
  })
  const setUserName = e => {
    setUserName(e.target.value)
  }
  const updateUser = e => {
    e.persist()
    setUser(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }

  const submitForm = async e => {
    e.preventDefault()
    const resp = await axios.post('https://localhost:5001/auth/login', user)
    console.log(resp.data)
    localStorage.setItem('token', resp.data.token)
    localStorage.setItem('expiresAt', resp.data.expirationTime)
    // redirect to the secret
    if (resp.status === 200) {
      setUsernameFromApi(resp.data.username)
    }
  }

  return (
    <>
      {successfullyCreated ? (
        <Redirect to={`/secret/${usernameFromApi}`} />
      ) : (
        <div>
          <form onSubmit={submitForm}>
            <header>Welcome Back!</header>
            <input
              type="text"
              placeholder="username"
              required
              value={user.username}
              onChange={updateUser}
              name="username"
            />
            <input
              type="password"
              placeholder="Password"
              required
              onChange={updateUser}
              name="password"
            />
            <button>Log In</button>
          </form>
        </div>
      )}
    </>
  )
}

export default LoginPage
