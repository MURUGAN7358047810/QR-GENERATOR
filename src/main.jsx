import React from 'react'
import ReactDOM from 'react-dom/client'

// import { Advice } from './components/Advice'
import { QRcode } from './QRcode'
// import './components/App.css';

// import { Idproof } from './components/idproof';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Idproof /> */}
    <QRcode />
    {/* <Advice /> */}
  </React.StrictMode>,
)
