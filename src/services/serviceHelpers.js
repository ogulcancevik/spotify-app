import axios from 'axios'
export const api = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` }
})

api.interceptors.response.use(undefined, (error) => {
  const statusCode = error.response ? error.response.status : null

  if (statusCode === 401) {
    // logout user
    console.log('logout user')
  }

  if (statusCode >= 500) {
    // show server error
    console.log('show server error')
  }

  if (statusCode === 400) {
    // show bad request error
    const { message } = error.response.data
    console.log(message)
  }

  return Promise.reject(error)
})
