import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
// import './index.css'
import api from './features/users/apiSlice.js'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <ApiProvider api={api}>
    <App />
    </ApiProvider>
  </React.StrictMode>,
  </BrowserRouter>
)
