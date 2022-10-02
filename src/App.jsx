import React, { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import HomeView from './views/HomeView'
import LoginView from './views/LoginView'

const App = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const registerToken = () => {
    const hash = window.location.hash
    const token = hash.substring(1).split('&')[0].split('=')[1]
    if (token) {
      localStorage.setItem('token', token)
      navigate('/')
    }
  }
  useEffect(() => {
    registerToken()
  }, [])
  useEffect(() => {
    if (location.pathname === '/login' && localStorage.getItem('token')) {
      navigate('/')
    }
  }, [location])
  return (
    <Routes>
      <Route path="/login" element={<LoginView />} />
      <Route path="/" element={<PrivateRoute Component={HomeView} />} />
    </Routes>
  )
}

export default App
