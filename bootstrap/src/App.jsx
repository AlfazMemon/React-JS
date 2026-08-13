import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/product' element={<Product/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='*' element={<h1>404 Page not Found</h1>}></Route>
      </Routes>
    </>
  )
}

export default App