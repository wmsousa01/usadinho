import React from 'react'
import { Link } from "react-router-dom"
import '../components/Card.css'

const Card = ({ product}) => {
  return (
    <div className='Card'>
        <div key={product._id} className="card" style={{width: "18rem"}}>
        <img src={product.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
            <h3>{ product.name }</h3>
                <p>Preço: { Number(product.price).toFixed(2) }</p>
                <p>Estado: { product.condition }</p>
                <p>Descrição: {product.desc }</p>
                <div className='divCardInicial'>
                    <Link className='btn btn-primary me-2' to={`/ProductPage/${product._id}`}>Comprar</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card