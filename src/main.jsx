import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Router from "./Router.jsx"
import { HomeBar } from './HomeBar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomeBar></HomeBar>
    <Router />
  </React.StrictMode>,
)
