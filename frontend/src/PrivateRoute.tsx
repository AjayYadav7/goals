import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}: any) => {
  console.log("children",children)
  const user = localStorage.getItem('user')
  return (
    !user ? <Navigate to="/" /> : children
  )
}

export default PrivateRoute