import {} from 'react'
import React from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import IdentityVerification from './pages/IdentityVerification';

import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
   <Router>
      <div className='min-h-screen flex flex-col'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/identity-verification" element={<IdentityVerification />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
