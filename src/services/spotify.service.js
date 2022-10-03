import { api } from './serviceHelpers'

const getUserPlayLists = async () => {
  const { data } = await api.get('/me/playlists')
  return await data.items
}

const getMe = async () => {
  const { data } = await api.get('/me')
  return await data
}

const getPlayList = async (id) => {
  // limit infinite
  const { data } = await api.get(`/playlists/${id}`)
  return await data
}

const search = async (query) => {
  const { data } = await api.get(`/search?q=${query}&type=track`)
  return await data
}
const getSeveralCategories = async (ids) => {
  const { data } = await api.get('/browse/categories')
  return await data.categories
}

const getCurrentPlayingTrack = async () => {
  const { data } = await api.get('/me/player/currently-playing')
  return await data
}

const start = async () => {
  const { data } = await api.put('/me/player/play')
  return await data
}
const pause = async () => {
  const { data } = await api.put('/me/player/pause')
  return await data
}

const getAvaibleDevices = async () => {
  const { data } = await api.get('/me/player/devices')
  return await data
}
const transferPlayback = async (deviceId) => {
  const { data } = await api.put('/me/player', {
    device_ids: [deviceId],
    play: true
  })
  return await data
}
const playBackState = async () => {
  const { data } = await api.get('/me/player')
  return await data
}
export const spotifyService = {
  getUserPlayLists,
  getMe,
  getPlayList,
  search,
  getSeveralCategories,
  getCurrentPlayingTrack,
  start,
  pause,
  transferPlayback,
  getAvaibleDevices,
  playBackState
}
