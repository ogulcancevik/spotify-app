import React, { useEffect } from 'react'
import { SET_USER_DATA, SET_USER_PLAYLIST } from '@/app/global'
import { spotifyService } from '@/services/spotify.service'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ Component }) => {
  const dispatch = useDispatch()
  const getUserData = async () => {
    const userData = await spotifyService.getMe()
    const userPlaylist = await spotifyService.getUserPlayLists()
    dispatch(SET_USER_DATA(userData))
    dispatch(SET_USER_PLAYLIST(userPlaylist))
  }
  useEffect(() => {
    if (!token) return
    getUserData()
  }, [])
  const token = localStorage.getItem('token')
  if (!token) {
    return <Navigate to="/login" replace />
  } else {
    return <Component />
  }
}

export default PrivateRoute
