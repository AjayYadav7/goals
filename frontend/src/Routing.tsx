import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/auth/Login'
import Registration from './pages/auth/Registration'
import PrivateRoute from './PrivateRoute'
import { getLocalStorage } from './storage/LocalStorage'
import { ADD_LANGUAGE_ROUTE } from './contants/RouteConstants'
import AddLanguage from './pages/AddLanguage'

const Routing = () => {
  const user = getLocalStorage('item')
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!user ? <Login />: <Navigate to="/" />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path={ADD_LANGUAGE_ROUTE} element={<PrivateRoute><AddLanguage /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing