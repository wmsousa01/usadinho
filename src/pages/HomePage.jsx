import React from 'react'
import '../pages/HomePage.css'
import background from '../images/BGHomePage.png'
import Card from '../components/Card'
import Form from '../components/Form'



const HomePage = () => {
  return (
    <div>
      <div className="HomePage" style={{backgroundImage:`url(${background})`}}>
       
       <Form />

        
      </div>
      <div className='pt-5 container text-center'>
        <h1>Nossos Produtos</h1>
        <div className='row'>
          <div className='row row-cols-4'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>

    
    
  )
}

export default HomePage