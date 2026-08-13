import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div >

        

         <ul style={{display:'flex', justifyContent:'space-between',listStyle:'none'}}>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/product'}>Product</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
        </ul>

    </div>
  )
}

export default Navbar