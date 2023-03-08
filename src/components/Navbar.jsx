import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from "../context/AuthContext.js";

const Navbar = () => {
  const { userName } = useContext(AppContext);
  
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark" style={{background: "#008489"}}>
            <div className="container">
              <Link to="/">
                <img 
                  src="../logo.svg" 
                  alt="" 
                  width={40}
                  />
              </Link>
                <Link className='btn btn-primary me-2' to={`/LoginPage`}>Login</Link>
                <Link className='btn btn-primary me-2' to={`/ProductPage/manage`}>Meus Produtos</Link>
                <Link className='btn btn-primary me-2' to={`/ProductPage/manage`}>{userName}</Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar