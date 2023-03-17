import React from 'react'
import { Link, useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import CommentCard from '../components/CommentCard'

const ProductPage = () => {
    const { itemId } = useParams()

    const [product, setProduct] = useState(null)
    const [user, setUser] = useState('')
    const [text, setText] = useState('')
    const [comments, setComments] = useState('')

    const navigate = useNavigate()




    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/products/${itemId}`)
            .then(response => {
                console.log(response.data)
                setProduct(response.data)
            })
            .catch(err => console.log(err))

    }, [itemId])

    const handleSubmit = e => {
        e.preventDefault()

        const updatedComment = {
            user,
            text
        }

        console.log(updatedComment)

        axios.post(`${process.env.REACT_APP_API_URL}/products/${itemId}/comments`, updatedComment,)
            .then(response => {
                Swal.fire({
                    title: 'Comentário Enviado!',
                    icon: 'success',
                    confirmButtonText: 'Confirmar'

                })
                if (updatedComment) {
                    navigate(`/`)
                }

            })
            .catch(err => console.log(err))
    }


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
                                <h2>{product.product}</h2>
                                <h3>Preço: {Number(product.price).toFixed(2)}</h3>
                                <p>{product.desc}</p>
                                <p> {product.condition}</p>
                                <p>{product.comments.user}</p>

                                <button className='btn btn-primary me-2' onClick={() => HandleClick()}>Comprar </button>
                            </div>

                            <div className='divCardInicial p-2'>
                                <Link className='btn btn-primary me-2' to={`/`}>Home Page</Link>
                            </div>
                            <div>
                                <h3>Comentarios:</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">Nome</label>
                                        <input
                                            type="name"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            placeholder="Seu Nome"
                                            onChange={e => setUser(e.target.value)}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1">Deixe aqui o seu comentário</label>
                                        <textarea
                                            className="form-control"
                                            id="exampleFormControlTextarea1"
                                            rows="3"
                                            onChange={e => setText(e.target.value)}
                                        />
                                    </div>

                                    <button className='btn btn-primary me-2'>Enviar </button>

                                </form>
                                </div>

                                <div className='p-4'>
                                
                                         {     
                                                product.comments.map(comments => {              
                                                    return <CommentCard key={product.comments._id} comments={comments} />
                                            })
                                        }
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