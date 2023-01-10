import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [product, setProduct] = useState('')
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark" style={{background: "#008489"}}>
            <div class="container">
              <Link to="/">
                <img 
                  src="../logo.svg" 
                  alt="" 
                  width={40}
                  />
              </Link>
                <Link className='btn btn-primary me-2' to={`/ProductPage/manage`}>Sou Vendedor</Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar