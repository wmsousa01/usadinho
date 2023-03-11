import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import '../pages/LoginPage.css'
import axios from 'axios'
import { AuthContext } from '../context/auth.context';
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';



const LoginPage = (props) => {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [emailSignUp, setEmailSignUp] = useState('')
   const [password, setPassword] = useState('')
   const [passwordSignUp, setPasswordSignUp] = useState('')

   const navigate = useNavigate()

   const { setToken, setUserName , refresh, setRefresh} = useContext(AuthContext)

   const handleSubmitLogin = e => {
      e.preventDefault()

      const newUser = {
          email, 
          password
      }

      axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, newUser)
      .then(response => {
          localStorage.setItem('loggedInUser',JSON.stringify(response.data))
          setToken(response.data.jwt);
          setUserName(response.data.user)
          setEmail('')
          setPassword('')
          setRefresh(!refresh)
          navigate('/')
      })
      .catch(error => console.log(error))
}
   const handleSubmitSignUp = e => {
      e.preventDefault()

      const newUser = {
         name,
         email: emailSignUp, 
         password: passwordSignUp
      }

      axios.post(`${process.env.REACT_APP_API_URL}/auth/sign-up`, newUser)
      .then(response => {

         localStorage.setItem('loggedInUser',JSON.stringify(response.data))
          if(response.status === 201) {
              setToken(response.data.jwt)
              setName('')
              setEmailSignUp('')
              setPasswordSignUp('')
              alert('User created')
              navigate('/')
          }
      })
      .catch(error => console.log(error))
}
  return (
   <div>
    <div id='login' className='border border-success rounded'>
        <div className="sidenav">
         <div className="login-main-text">
            <h2>Sou cadastrado </h2>
         </div>
      </div>
      <div className="main">
         <div className="col-md-6 col-sm-12">
            <div className="login-form">
               <form onSubmit={handleSubmitLogin}>
                  <div className="form-group">
                     <label>Email</label>
                     <input 
                        type="text" 
                        className="form-control"
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email"
                        />
                  </div>
                  <div className="form-group">
                     <label>Senha</label>
                     <input 
                        type="password" 
                        className="form-control"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Senha"/>
                  </div>
                  <div className='pt-2'
                     onClick={handleSubmitLogin}
                  >
                    <button className='btn btn-primary me-2'> Login</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
    </div>

    <div id='sign-up' className='border border-success rounded'>
        <div className="sidenav">
         <div className="login-main-text">
            <h2>Se cadastre agora </h2>
         </div>
      </div>
      <div className="main">
         <div className="col-md-6 col-sm-12">
            <div className="login-form">
               <form onSubmit={handleSubmitSignUp}>
               <div className="form-group">
                     <label>Nome</label>
                     <input 
                        type="text" 
                        className="form-control"
                        value={name} 
                        onChange={e => setName(e.target.value)}
                        placeholder="User Name"
                        />
                  </div>
                  <div className="form-group">
                     <label>Email</label>
                     <input 
                        type="text" 
                        className="form-control"
                        value={emailSignUp} 
                        onChange={e => setEmailSignUp(e.target.value)}
                        placeholder="Email"
                        />
                  </div>
                  <div className="form-group">
                     <label>Senha</label>
                     <input 
                        type="password" 
                        className="form-control"
                        value={passwordSignUp}
                        onChange={e => setPasswordSignUp(e.target.value)}
                        placeholder="Senha"/>
                  </div>
                  
                  <div className='pt-2'
                     onClick={handleSubmitSignUp}
                  >
                    <button className='btn btn-primary me-2'> Sign Up</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
    </div>
    </div>
    
  )
}

export default LoginPage