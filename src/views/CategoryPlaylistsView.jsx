import { spotifyService } from '@/services/spotify.service'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const CategoryPlaylistsView = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [playlists, setPlaylists] = useState([])
  useEffect(() => {
    (async () => {
      const data = await spotifyService.getCategoryPlaylists(id)
      setPlaylists(data.items)
    })()
  })
  return (
    <div
      className="w-full rounded-xl ml-2 overflow-auto p-8"
      style={{
        background: '#141414',
        height: 'calc(100vh - 125px)'
      }}
    >
      <div className="grid grid-cols-5 gap-5">
        {playlists?.map(({ id, name, images }) => {
          return (
            <div
              className="flex justify-center items-center flex-col text-white cursor-pointer"
              key={id}
              onClick={() => {
                navigate(`/playlist/${id}`)
              }}
            >
              <img src={images[0].url} alt="category_image" />
              <div className="mt-2">{name}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CategoryPlaylistsView
