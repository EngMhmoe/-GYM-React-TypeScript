// ==========================================================
// Imports
// ==========================================================

// React
import React from 'react'
import ReactDOM from 'react-dom/client'

// Components
import App from './components/App'

// Styles
import './index.css'


// ==========================================================
// Render Application
// ==========================================================
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
