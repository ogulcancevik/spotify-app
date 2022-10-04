import { combineReducers, configureStore } from '@reduxjs/toolkit'
import spotify from './spotify'
const reducer = combineReducers({
  spotify
})
const store = configureStore({
  reducer
})

export default store
