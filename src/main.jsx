import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/index/App.jsx'
import Login from './components/login/Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Login />
  </React.StrictMode>,
)
