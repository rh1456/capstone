import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'

const Secret = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      setIsAuthenticated(false)
    }
  }, [])

  return (
    <>
      {isAuthenticated ? <div>Use page</div> : <Redirect to="/1" />}
      <body>
        <h1>HEaders</h1>
      </body>
    </>
  )
}

export default Secret
