import { spotifyService } from '@/services/spotify.service'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HomeView = () => {
  const navigate = useNavigate()
  const [categories, setCategories] = useState({})
  const fetchSeveralCategories = async () => {
    const data = await spotifyService.getSeveralCategories()
    setCategories(data)
  }
  useEffect(() => {
    fetchSeveralCategories()
  }, [])
  return (
    <div
      className="w-full rounded-xl ml-2 overflow-auto p-8"
      style={{
        background: '#141414',
        height: 'calc(100vh - 125px)'
      }}
    >
      <div className="grid grid-cols-5 gap-5">
        {categories?.items?.map(({ id, name, icons }) => {
          return (
            <div
              className="flex justify-center items-center flex-col text-white cursor-pointer"
              key={id}
              onClick={() => {
                navigate(`/playlist/${id}`)
              }}
            >
              <img src={icons[0].url} alt="category_image" />
              <div className="mt-2">{name}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HomeView
