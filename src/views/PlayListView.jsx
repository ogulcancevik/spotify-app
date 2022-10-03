import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { spotifyService } from '@/services/spotify.service'
import { formatDate, msToMin } from '@/utils/format'
import { SET_ACTIVE_SONG } from '@/app/global'
import { useDispatch } from 'react-redux'
import { Loading } from '@/components/Loading'
const PlayListView = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [playList, setPlayList] = useState([])
  const fetchPlayList = async () => {
    setLoading(true)
    const data = await spotifyService.getPlayList(id)
    setPlayList(data)
    setLoading(false)
  }
  useEffect(() => {
    fetchPlayList()
  }, [id])

  return loading
    ? (
      <Loading />
      )
    : (
    <div
      className="p-8 rounded-xl ml-2 h-full w-full"
      style={{
        background: '#141414',
        height: 'calc(100vh - 125px)'
      }}
    >
      <div className="flex items-center">
        <img
          className="object-cover"
          style={{
            width: '232px',
            height: '232px'
          }}
          src={playList?.images?.[0].url}
          alt="playlist_image"
        />
        <div className='flex flex-col ml-4 text-white relative' style={{
          height: '232px'
        }}>
          <div className='mt-12'>
          <div className='uppercase font-bold text-xs'>{playList?.type}</div>
        <div className="text-6xl font-bold">
          {playList?.name}
        </div>
        <div className='absolute bottom-0 flex'>
        {playList?.owner?.display_name}
        <div className='mx-2'>•</div>
        {playList?.tracks?.total} Songs
        </div>
        </div>
      </div>
          </div>
      <div
        className="overflow-y-scroll mt-6"
        style={{
          height: 'calc(100vh - 450px)'
        }}
      >
        <table className="w-full text-white mt-8">
          <thead>
            <tr>
              <th className='text-left'>#</th>
              <th className="text-left">TITLE</th>
              <th className="text-left">ALBUM</th>
              <th className="text-left">DATE ADDED</th>
              <th className="text-center">DURATION</th>
            </tr>
          </thead>
          <tbody>
            {playList.tracks?.items?.map((item, index) => {
              return (
              <tr key={index} className="cursor-pointer" onClick={() => {
                dispatch(SET_ACTIVE_SONG(item.track.uri))
              }}>
                <td className="py-2">{index + 1}</td>
                <td className="py-2">
                  <div className="flex items-center">
                    <img
                      className="object-cover"
                      style={{
                        width: '48px',
                        height: '48px'
                      }}
                      src={item.track.album.images[0].url}
                      alt="album_image"
                    />
                    <div className='flex flex-col ml-4'>
                    <div>
                      {item.track.name}
                    </div>
                    <div className='text-sm text-gray-300'>{item.track.artists[0].name}</div>
                    </div>
                  </div>
                </td>
                <td className="py-2">{item.track.album.name}</td>
                <td className="py-2">{formatDate(item.added_at)}</td>
                <td className="text-center">{msToMin(item.track.duration_ms)}</td>
              </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
      )
}

export default PlayListView
