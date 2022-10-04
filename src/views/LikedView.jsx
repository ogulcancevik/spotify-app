import React, { useEffect, useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { spotifyService } from '@/services/spotify.service'
import { Loading } from '@/components/Loading'
import { ClipLoader, ScaleLoader } from 'react-spinners'
import { SET_ACTIVE_SONG } from '@/app/global'
import { useDispatch } from 'react-redux'
const LikedView = () => {
  const dispatch = useDispatch()
  const [total, setTotal] = useState(0)
  const [offset, setOffset] = useState(50)
  const [likedSongs, setLikedSongs] = useState([])
  const [scrollLoading, setScrollLoading] = useState(false)
  const [loading, setLoading] = useState(false)
  const fetchLikedSongs = async () => {
    const { items, total } = await spotifyService.getLikedSongs()
    setLikedSongs(items)
    setTotal(total)
  }
  useEffect(() => {
    (async () => {
      setLoading(true)
      await fetchLikedSongs()
      setLoading(false)
    })()
  }, [])
  const lazyLoading = async (e) => {
    if (e.target.scrollTop === e.target.scrollHeight - e.target.clientHeight) {
      if (offset < total && !scrollLoading) {
        setScrollLoading(true)
        setOffset(offset + 50)
        const { items } = await spotifyService.getLikedSongs(offset)
        setLikedSongs([...likedSongs, ...items])
        setScrollLoading(false)
      }
    }
  }
  return (
    <div
      className="w-full flex flex-col items-center rounded-lg ml-1"
      style={{
        background: '#141414',
        height: 'calc(100vh - 125px)'
      }}
    >
      {loading
        ? (
        <Loading LoaderComponent={ClipLoader} />
          )
        : (
        <>
          <div className="w-full flex justify-between items-center px-4 py-2 my-3 text-white">
            <div className="text-2xl font-bold flex items-center">
              <AiFillHeart className="mr-3 text-xl" /> Liked Songs
            </div>
            <div>{total} Songs</div>
          </div>
          <div
            className="w-full flex flex-col items-center overflow-y-scroll"
            style={{
              height: 'calc(100vh - 125px)'
            }}
            onScroll={lazyLoading}
          >
            {likedSongs.map(({ track }, index) => {
              return (
                <div
                  className="w-full flex justify-between items-center px-4 py-2 cursor-pointer"
                  key={index}
                  onClick={() => {
                    dispatch(SET_ACTIVE_SONG(track.uri))
                  }}
                >
                  <div className="flex items-center">
                    <div className="mr-4 text-white">{index + 1}</div>
                    <img
                      src={track.album.images[0].url}
                      alt=""
                      className="w-12 h-12 rounded-md"
                    />
                    <div className="ml-3">
                      <div className="text-white">{track.name}</div>
                      <div className="text-gray-400">
                        {track.artists.map(({ name }) => name).join(', ')}
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-300">{track.album.name}</div>
                </div>
              )
            })}
          </div>
          {scrollLoading && <ScaleLoader color="white" />}
        </>
          )}
    </div>
  )
}

export default LikedView
