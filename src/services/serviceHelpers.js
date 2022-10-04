import axios from 'axios'
export const api = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` }
})

api.interceptors.response.use(undefined, (error) => {
  const statusCode = error.response ? error.response.status : null

  if (statusCode === 401) {
    // logout user
    localStorage.removeItem('token')
    window.location.href = '/'
  }

  if (statusCode >= 500) {
    // handle server error
  }

  if (statusCode === 400) {
    // handle bad request
  }
  return Promise.reject(error)
})
