import { api } from './serviceHelpers'

const getPlaylistData = async () => {
  const { data } = await api.get('/me/playlists')
  return await data
}

export const spotifyService = {
  getPlaylistData
}
