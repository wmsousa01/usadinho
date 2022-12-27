import React from 'react'
import '../pages/HomePage.css'
import background from '../images/BGHomePage.png'



const HomePage = () => {
  return (
    <div className="HomePage" style={{backgroundImage:`url(${background})`}}>
      <div className='header'>
        <h1 className='h1'>U</h1>
        <div className='qv'>Quero Vender</div>

      </div>
        
      <div className="row">
        <div className="col">
        <div className="card" style={{width: '20vw'}}>
            <div className="card-body">
              <h5 className="card-title">Querendo divulgar aquelas bugigangas que não usa mais?</h5>
                <p className='card-text'>NOME</p>
                <input></input>
                <p className='card-text'>TELEFONE</p>
                <input></input>
                <p className='card-text'>EMAIL</p>
                <input></input>
                <div className='divCardInicial'>
                  <a href="#" className='btn btn-primary'>Enviar</a>
                </div>
                
            </div>
        </div>
        </div>

      </div>
    </div>
    
  )
}

export default HomePage