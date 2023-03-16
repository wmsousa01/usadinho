import React from 'react'
import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import CommentCard from '../components/CommentCard'

const ProductPage = () => {
    const { itemId } = useParams()

    const [product, setProduct] = useState(null)
    const [comments, setComments] = useState('')
    
    
    

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/products/${itemId}`)
            .then(response => {
                console.log(response.data)
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
                                <img width={600} src={product.picture ? product.picture : 'https://via.placeholder.com/400x500'} alt="product" />
                            </div>
                            <div className="col border border-success rounded p-2">
                                <h2>{ product.product }</h2>
                                <h3>Preço: { Number(product.price).toFixed(2) }</h3>
                                <p>{product.desc}</p>
                                <p> { product.condition }</p>
                                <p>{product.comments.user }</p>

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
            <div>
                <h3>Comentarios:</h3>
                <form action="">
                <div className="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Deixe aqui o seu comentário</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                </form>
                <button className='btn btn-primary me-2' onClick= {() => HandleClick()}>Enviar </button>
            </div>
         
            
    </div>
  )
}

export default ProductPage