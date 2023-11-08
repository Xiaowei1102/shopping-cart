import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Router from "./Router.jsx"
import { HomeBar } from './HomeBar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* if you bring Homebar outside of the Router element, react will report error bcz HomeBar contains links that used in the router */}
    <Router>
      
    </Router>
    
  </React.StrictMode>,
)
