import { SET_SELECTED_PLAYLIST } from '@/app/global'
import React from 'react'
import { AiFillHome, AiFillHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userPlayList = useSelector((state) => state.global.userPlaylist)
  return (
    <div
      className="w-64 flex flex-col items-center text-gray-300 rounded-xl ml-1"
      style={{
        background: '#121212',
        height: 'calc(100vh - 125px)'
      }}
    >
      <div className="flex items-center w-full px-4 mt-6">
        <ul className="flex flex-col justify-around h-24">
          <li
            className="flex items-center cursor-pointer hover:text-white"
            onClick={() => {
              navigate('/')
            }}
          >
            <AiFillHome className="mr-3 text-xl" /> Home
          </li>
          <li
            className="flex items-center cursor-pointer"
            onClick={async () => {
              navigate('/collection/tracks')
            }}
          >
            <AiFillHeart className="mr-3 text-xl" /> Liked Songs
          </li>
        </ul>
      </div>
      <div
        className="px-4 overflow-auto"
        style={{
          height: 'calc(100vh - 300px)'
        }}
      >
        {userPlayList
          ? (
              userPlayList.map(({ id, name }) => {
                return (
              <div
                onClick={() => {
                  dispatch(SET_SELECTED_PLAYLIST(id))
                  navigate(`/playlist/${id}`)
                }}
                className="my-6 hover:text-white cursor-pointer"
                key={id}
              >
                {name}
              </div>
                )
              })
            )
          : (
          <div>Loading...</div>
            )}
      </div>
    </div>
  )
}

export default Sidebar
