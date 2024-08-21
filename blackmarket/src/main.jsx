import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { UserSessionProvider } from './context/UserSessionProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <UserSessionProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UserSessionProvider>
)
