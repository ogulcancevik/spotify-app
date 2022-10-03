import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: null,
    userPlaylist: null,
    selectedPlayList: null,
    activeSong: null
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
    }
  }
})

export const { SET_USER_DATA, SET_USER_PLAYLIST, SET_SELECTED_PLAYLIST, SET_ACTIVE_SONG } = userSlice.actions
export default userSlice.reducer
