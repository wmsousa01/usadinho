import React from 'react'
import '../pages/HomePage.css'
import background from '../images/BGHomePage.png'
import Form from '../components/Form'
import ViewCollection from '../components/ViewCollection'



const HomePage = () => {
  return (
    <div>
      <div className="HomePage mw-100" style={{backgroundImage:`url(${background})`}}> 
      </div>
      <div className='pt-5 container text-center'>
        <h1 className='text-uppercase border border-primary rounded'>Nossos Produtos</h1>
        <div className='row'>
          <div className=''>
            <ViewCollection />
          </div>
        </div>
      </div>
    </div>

    
    
  )
}

export default HomePage