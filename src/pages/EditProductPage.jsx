import { Link, useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'


const EditProductPage = () => {
    const [product, setProduct] = useState([])
    const [imageUrl, setImageUrl] = useState('https://via.placeholder.com/400x500')
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [condition, setCondition] = useState('')
    const [desc, setDesc] = useState('')
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    const navigate = useNavigate()


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/usadinho/${itemId}`)
            .then(response => {
                let { 
                    name, 
                    imageUrl, 
                    price, 
                    condition, 
                    desc
                } = response.data
                setName(name)
                setImageUrl(imageUrl)
                setPrice(price)
                setCondition(condition)
                setDesc(desc)
                setLoading(false)
            })
    }, [itemId])

    const handleSubmit = e => {
        e.preventDefault()

        const updatedProduct = {
            name, 
            imageUrl, 
            price, 
            condition, 
            desc
        }

        axios.put(`${process.env.REACT_APP_API_URL}/usadinho/${itemId}`, updatedProduct)
            .then(response => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Product successfully updated!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="EditItemPage">
            <div className="row">
                <div className="col">
                    <h2 className="mt-5">Editar Produto</h2>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col">
                        <img width={600} src={imageUrl ? imageUrl : 'https://via.placeholder.com/400x500'} alt="product" />
                    </div>
                    <div className="col p-2">
                    <div className="card border border-success rounded p-2" style={{width: '20vw'}}>
                        <div className="card-body">
                            <h5 className="card-title">Atualize as informações do seu produto</h5>
                            <p className='card-text'>IMAGEM</p>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="imageUrl" 
                                value={imageUrl}
                                onChange={ e => setImageUrl(e.target.value) }
                            />
                            <p className='card-text'>NOME DO PRODUTO</p>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="name" 
                                value={name}
                                onChange={ e => setName(e.target.value) }
                            />
                            <p className='card-text'>PREÇO</p>
                            <input 
                                type="number" 
                                className="form-control" 
                                id="price" 
                                value={price}
                                onChange={ e => setPrice(e.target.value) }
                            />
                            <p className='card-text'>ESTADO</p>
                            <select 
                                className="form-select" 
                                type="text" 
                                aria-label="Default select example"
                                value={condition}
                                onChange={ e => setCondition(e.target.value) }
                            >
                                <option value="Novo">Novo</option>
                                <option value="Usado">Usado</option>
                                <option value="Semi Novo">Semi Novo</option>
                                
                            </select>
                            
                            <p className='card-text'>DESCRIÇÃO</p>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="description" 
                                value={desc}
                                onChange={ e => setDesc (e.target.value) }
                            />
                            <div className='divCardInicial'>
                            <button type='submit' className='btn btn-primary'>Enviar</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </form>

            <div className='divCardInicial'>
                <Link className='btn btn-primary me-2' to={`/`}>Home Page</Link>
                <Link className='btn btn-primary me-2' to={`/ProductPage/${product._id}/edit`}>Editar</Link>
            </div>
        </div>
    )
}

export default EditProductPage