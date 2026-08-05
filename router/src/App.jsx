import React from 'react'
import Home from './pages/Home'
import Pnf from './pages/Pnf'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import { Route, Router, Routes } from 'react-router-dom'
import Navbar from './Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<Pnf />} />

      </Routes>
    </div>
  )
}

export default App
