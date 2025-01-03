import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

import About from './components/about/About'
import Contact from './components/contact/Contact'
import Home from './components/Home/Home'
import Services from './components/services/Services'
import Prices from './components/prices/Prices'
import Header from './components/common/header/Header'
import Footer from './components/common/footer/Footer'


function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/prices" element={<Prices />} />
      </Routes>
     <Footer/>
    </Router>
    </>
  )
}

export default App
