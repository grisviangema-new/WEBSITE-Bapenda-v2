import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AdminContextProvider from './context/AdminContext.jsx' // Import Context

ReactDOM.createRoot(document.getElementById('root')).render(
  <AdminContextProvider> {/* Bungkus App di sini */}
    <App />
  </AdminContextProvider>,
)