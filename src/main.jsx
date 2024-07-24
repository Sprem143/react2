import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Reusable/Header.jsx'
import Footer from './Reusable/Footer.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FixedIcon from './Reusable/FixedIcon.jsx'
import "../src/Reusable/Footer.css"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <FixedIcon />
    <App />
    <Footer/>
  </React.StrictMode>,
)
