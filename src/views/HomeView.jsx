import Sidebar from '@/components/Sidebar'
import { spotifyService } from '@/services/spotify.service'
import React, { useEffect } from 'react'

const HomeView = () => {
  useEffect(() => {
    const getPlaylistData = async () => {
      const data = await spotifyService.getPlaylistData()
      console.log(data.items.map(({ id, name }) => ({ id, name })))
    }
    getPlaylistData()
  })
  return (
    <div>
      <Sidebar />
    </div>
  )
}

export default HomeView
