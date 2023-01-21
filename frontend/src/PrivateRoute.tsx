import React from 'react'
import { Navigate } from 'react-router-dom'
import { getLocalStorage } from './storage/LocalStorage'

const PrivateRoute = ({children}: any) => {
  const user = getLocalStorage('user')
  return (
    !user ? <Navigate to="/" /> : children
  )
}

export default PrivateRoute