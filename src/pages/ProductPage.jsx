import React from 'react'

import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

const ProductPage = () => {
    const { itemId } = useParams()

    const [product, setProduct] = useState(null)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/usadinho/${itemId}`)
            .then(response => {
                setProduct(response.data)
            })
            .catch(err => console.log(err))
    }, [itemId])

    function HandleClick() {  
        Swal.fire({  
          title: 'Parabéns',  
          type: 'success',  
          text: 'Seu pedido foi processado e esta a caminho.',  
        });  
      } 

  return (
    <div>
    
        <div className="row">
                {
                    product ? (
                        <>  
                            <h1>{ product.name }</h1>
                            <div className="col">
                                <img width={400} src={ product.imageUrl ? product.imageUrl : 'https://via.placeholder.com/400x500' } alt="product" />
                            </div>
                            <div className="col">
                                
                                <h3>Preço: { Number(product.price).toFixed(2) }</h3>
                                <p>Estado: { product.condition }</p>
                                <p>Descrição: {product.desc }</p>

                                <button className='btn btn-primary me-2' onClick= {() => HandleClick()}>Comprar </button>
                            </div>

                            <div className='divCardInicial'>
                                <Link className='btn btn-primary me-2' to={`/`}>Home Page</Link>
                            </div>
                        </>
                    ) : (
                        <p>Sorry, no product.</p>
                    )
                }
            </div>
    </div>
  )
}

export default ProductPage