import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/auth/Login'
import Registration from './pages/auth/Registration'
import PrivateRoute from './PrivateRoute'
import { getLocalStorage } from './storage/LocalStorage'

const Routing = () => {
  const user = getLocalStorage('item')
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!user ? <Login />: <Navigate to="/" />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing