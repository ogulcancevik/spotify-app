import { combineReducers, configureStore } from '@reduxjs/toolkit'
import global from './global'
const reducer = combineReducers({
  global
})
const store = configureStore({
  reducer
})

export default store
