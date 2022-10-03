import React, { useEffect, useState } from 'react'
import { FaSpotify } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const { userData } = useSelector((state) => state.global)
  const [userMenuShown, setUserMenuShown] = useState(false)
  const [profilePic, setProfilePic] = useState('')
  useEffect(() => {
    setProfilePic(userData?.images[0].url)
  }, [userData])
  return (
    <div className="flex justify-between items-center my-2 px-3">
      <FaSpotify className="text-white text-4xl" />
      <SearchBar />
      <div
        className="flex justify-center items-center cursor-pointer"
        style={{
          backgroundColor: '#2A2A2A',
          borderRadius: '100%',
          width: '48px',
          height: '48px'
        }}
      >
        {profilePic && (
          <img
            onClick={() => setUserMenuShown(!userMenuShown)}
            className="object-cover cursor-pointer"
            style={{
              borderRadius: '100%',
              width: '32px',
              height: '32px'
            }}
            src={profilePic}
            alt="profile_img"
          />
        )}
      </div>
      {userMenuShown && <UserMenu />}
    </div>
  )
}

export default Navbar

const SearchBar = () => {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    navigate(`/search/${query}`)
    setQuery('')
  }
  return (
    <div className="flex items-center">
      <div
        className="flex justify-center items-center mr-4 cursor-pointer"
        style={{
          background: '#2A2A2A',
          borderRadius: '100%',
          width: '48px',
          height: '48px'
        }}
      >
        <div className='cursor-pointer' onClick={() => {
          navigate('/')
        }}><AiFillHome className="text-white text-4xl p-1" /></div>
      </div>
      <div
        className="rounded-r-none rounded-full"
        style={{
          background: '#2A2A2A'
        }}
      >
        <BsSearch className="text-white h-12 text-2xl mx-3" />
      </div>
      <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        style={{
          background: '#2A2A2A',
          width: '400px'
        }}
        className="border rounded-l-none rounded-full h-12 outline-none border-none text-white"
        placeholder="What do you want to listen to?"
      />
      </form>
    </div>
  )
}

const UserMenu = () => {
  return (
    <div
      className="absolute rounded-lg right-0 flex p-5 text-white"
      style={{
        background: '#282828',
        marginTop: '130px',
        width: '196px'
      }}
    >
      <ul>
        <li
          className="flex items-center cursor-pointer hover:text-white"
          onClick={() => {
            localStorage.removeItem('token')
            window.location.href = '/'
          }}
        >
          Logout
        </li>
      </ul>
    </div>
  )
}
