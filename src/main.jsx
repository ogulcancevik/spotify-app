import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import '@/styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import store from './app/store'
import { Provider } from 'react-redux'
const app = ReactDOM.createRoot(document.getElementById('root'))

app.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
