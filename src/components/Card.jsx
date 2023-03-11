import React from 'react'
import { Link } from "react-router-dom"
import '../components/Card.css'

const Card = ({ product}) => {
  return (
    <div className='Card'>
        <div key={product._id} className="card bg-light mb-3" style={{width: "18rem"}}>
        <img src={product.picture} className="card-img-top" alt="..." width={300} height={300}/>
            <div className='card-header'>{ product.name }</div>
              <div className='card-body'>
                <h5 className='card-title'>Preço: { Number(product.price).toFixed(2) }</h5>
                <p className='card-text h5'>Estado: { product.condition }</p>
                <p className='card-text h6'>{product.desc }</p>
                <div className='divCardInicial'>
                    <Link className='btn btn-primary me-2' to={`/ProductPage/${product._id}`}>Comprar</Link>
                </div>
              </div>
            </div>
        </div>

  )
}

export default Card