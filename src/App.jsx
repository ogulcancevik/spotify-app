import React, { useEffect, useMemo } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute'
import Sidebar from './components/Sidebar'
import HomeView from './views/HomeView'
import LoginView from './views/LoginView'
import PlayListView from './views/PlayListView'
import SearchView from './views/SearchView'

const App = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const token = localStorage.getItem('token')
  const registerToken = () => {
    const hash = window.location.hash
    const token = hash.substring(1).split('&')[0].split('=')[1]
    if (token) {
      localStorage.setItem('token', token)
      window.location.href = '/'
    }
  }
  useEffect(() => {
    registerToken()
  }, [])
  useEffect(() => {
    if (location.pathname === '/login' && token) {
      navigate('/')
    }
  }, [location])
  const isSidebar = useMemo(() => {
    return localStorage.getItem('token') && location.pathname !== '/login'
  }, [location])
  return (
    <>
      {isSidebar && <Navbar />}

      <div className="flex flex-col">
        <div className="flex">
          {isSidebar && <Sidebar />}
          <Routes>
            <Route path="/login" element={<LoginView />} />
            <Route path="/" element={<PrivateRoute Component={HomeView} />} />
            <Route
              path="/playlist/:id"
              element={<PrivateRoute Component={PlayListView} />}
            />
            <Route
              path="/search/:query"
              element={<PrivateRoute Component={SearchView} />}
            />
          </Routes>
        </div>
        {isSidebar && <Footer />}
      </div>
    </>
  )
}

export default App
