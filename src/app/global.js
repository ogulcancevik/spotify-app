import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: null,
    userPlaylist: null,
    selectedPlayList: null,
    activeSong: null,
    likedSong: {
      items: [],
      total: 0
    }
  },
  reducers: {
    SET_USER_DATA: (state, action) => {
      state.userData = action.payload
    },
    SET_USER_PLAYLIST: (state, action) => {
      state.userPlaylist = action.payload
    },
    SET_SELECTED_PLAYLIST: (state, action) => {
      state.selectedPlayList = action.payload
    },
    SET_ACTIVE_SONG: (state, action) => {
      state.activeSong = action.payload
    },
    SET_LIKED_SONG: (state, action) => {
      const { items, total } = action.payload
      state.likedSong = {
        items,
        total
      }
    }
  }
})

export const { SET_USER_DATA, SET_USER_PLAYLIST, SET_SELECTED_PLAYLIST, SET_ACTIVE_SONG, SET_LIKED_SONG } = userSlice.actions
export default userSlice.reducer
