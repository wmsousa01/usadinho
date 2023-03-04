import React from 'react'

import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

const ProductPage = () => {
    const { itemId } = useParams()

    const [product, setProduct] = useState(null)
    

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/products/${itemId}`)
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
    
        <div className="row mw-100 p-4">
                {
                    product ? (
                        <>  
                            
                            <div className="col">
                                <img width={600} src={ product.imageUrl ? product.imageUrl : 'https://via.placeholder.com/400x500' } alt="product" />
                            </div>
                            <div className="col border border-success rounded p-2">
                                <h2>{ product.name }</h2>
                                <h3>Preço: { Number(product.price).toFixed(2) }</h3>
                                <p> { product.condition }</p>
                                <p>{product.desc }</p>

                                <button className='btn btn-primary me-2' onClick= {() => HandleClick()}>Comprar </button>
                            </div>

                            <div className='divCardInicial p-2'>
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