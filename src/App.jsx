import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/global/Navbar'
import Home from './pages/Home'
import Demo from './pages/Demo'

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </div>
  )
}

export default App
