import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth.context';

const Navbar = () => {
  
  const { isLoading, loggedInUser } = useContext(AuthContext)

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
                
                {!isLoading && (
                  <>
                  
                  <Link className='btn btn-primary me-2' to={`/ProductPage/manage`}>{loggedInUser.user}</Link>
                  <Link className='btn btn-primary me-2' to={`/ProductPage/manage`}>Meus Produtos</Link>
                  </>
                )}
               
                  <>
                  
                  <Link className='btn btn-primary me-2' to={`/LoginPage`}>Login</Link>
                 </>
                
              

            </div>
        </nav>
    </div>
  )
}

export default Navbar