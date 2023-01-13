import React from 'react'
import { Link } from 'react-router-dom'
import '../pages/LoginPage.css'

const LoginPage = () => {
  return (
    <div id='login' className='border border-success rounded'>
        <div className="sidenav">
         <div className="login-main-text">
            <h2>Entre com o seu usuário </h2>
            <p>Para gerenciar os seus produtos.</p>
         </div>
      </div>
      <div className="main">
         <div className="col-md-6 col-sm-12">
            <div className="login-form">
               <form>
                  <div className="form-group">
                     <label>Usuário</label>
                     <input type="text" className="form-control" placeholder="User Name"/>
                  </div>
                  <div className="form-group">
                     <label>Senha</label>
                     <input type="password" className="form-control" placeholder="Password"/>
                  </div>
                  <div className='pt-2'>
                    <Link className='btn btn-primary me-2' to={`/ProductPage/manage`}>Login</Link>
                  </div>
               </form>
            </div>
         </div>
      </div>
    </div>
  )
}

export default LoginPage