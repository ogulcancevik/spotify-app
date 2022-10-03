import { SET_ACTIVE_SONG } from '@/app/global'
import { spotifyService } from '@/services/spotify.service'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

const SearchView = () => {
  const dispatch = useDispatch()
  const { query } = useParams()
  const [searchedData, setSearchedData] = useState({})
  const getSearchedData = async () => {
    const data = await spotifyService.search(query)
    setSearchedData(data)
  }
  useEffect(() => {
    getSearchedData()
  }, [query])
  return (
    <div className='w-full rounded-xl ml-2 overflow-auto p-8' style={{
      background: '#141414',
      height: 'calc(100vh - 125px)'
    }}>
      <div className="grid grid-cols-5 gap-5 p-8">
        {searchedData?.tracks?.items?.map(({ id, name, album, uri }) => {
          return (
            <div
              className="flex justify-center items-center flex-col text-white cursor-pointer"
              key={id}
              onClick={() => {
                dispatch(SET_ACTIVE_SONG(uri))
              }}
            >
              <img src={album.images[0].url} alt="category_image" />
              <div className="mt-2">{name}</div>
              <div className="mt-2">{album.artists[0].name}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SearchView
