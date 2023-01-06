import React from 'react'

import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'
import Bike from '../images/bike.png'

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

  return (
    <div>
    
        <div className="row">
                {
                    product ? (
                        <>
                            <div className="col">
                                <img width={400} src={ product.imageUrl ? product.imageUrl : 'https://via.placeholder.com/400x500' } alt="product" />
                            </div>
                            <div className="col">
                                <p>{ product.name }</p>
                                <p>Preço: { Number(product.price).toFixed(2) }</p>
                                <p>Estado: { product.condition }</p>
                                <p>Descrição: {product.desc }</p>
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