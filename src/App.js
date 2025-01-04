import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import properties from '.././src/properties.json';

import './App.css'

import About from './components/about/About'
import Contact from './components/contact/Contact'
import Home from './components/Home/Home'
import Services from './components/services/Services'
import Prices from './components/prices/Prices'
import Header from './components/common/header/Header'
import Footer from './components/common/footer/Footer'
import PropertyDetails from './components/services/PropertyDetails'


const App = () =>{
  return (
    <>
    <Router>
      <Header/>
      <Routes>
      {/* <Route
            path="/services"
            element={
              <>
                <Search onSearch={handleSearch} />
                <PropertyList properties={filteredProperties} />
              </>
            }
          />
          <Route path="/property/:id" element={<PropertyDetails />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/prices" element={<Prices />} />
      </Routes>
     <Footer/>
    </Router>
    </>
  )
}

export default App
