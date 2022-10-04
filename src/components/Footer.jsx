import { SET_ACTIVE_SONG } from '@/app/spotify'
import { spotifyService } from '@/services/spotify.service'
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SpotifyPlayer from 'react-spotify-web-playback'
const Footer = () => {
  const dispatch = useDispatch()
  const { activeSong } = useSelector(state => state.spotify)
  const fetchCurrentPlayingTrack = async () => {
    const data = await spotifyService.getCurrentPlayingTrack()
    dispatch(SET_ACTIVE_SONG(data?.item?.uri))
  }
  useEffect(() => {
    fetchCurrentPlayingTrack()
  }, [])
  const currentTrack = useMemo(() => {
    return [activeSong]
  }, [activeSong])
  return (
    <div className="absolute bottom-0 w-full rounded-lg px-1.5">
      <SpotifyPlayer
        name="Spotify With React (Oğulcan ÇEVİK)"
        token={localStorage.getItem('token')}
        key={activeSong}
        uris={currentTrack}
        styles={{
          bgColor: '#121212',
          color: '#fff',
          loaderColor: '#fff',
          sliderColor: '#1cb954',
          sliderHandleColor: '#fff',
          trackArtistColor: '#fff',
          trackNameColor: '#fff'
        }}
        showSaveIcon={true}
        play={true}
        autoPlay={false}
        syncExternalDevice={true}
        syncExternalDeviceInterval={1000}
        persistDeviceSelection={true}
      />
    </div>
  )
}

export default Footer
