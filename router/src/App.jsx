import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Pnf from './Pnf'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Pnf />} />
      </Routes>
    </div>
  )
}

export default App