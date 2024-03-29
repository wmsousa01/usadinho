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
    const [picture, setPicture] = useState('')
    const [userName, setUserName] = useState('')
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    const navigate = useNavigate()


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/usadinho/${itemId}`)
            .then(response => {
                let { 
                    name,  
                    price, 
                    condition, 
                    desc,
                    picture,
                } = response.data
                setName(name)
                setPicture(picture)
                setPrice(price)
                setCondition(condition)
                setDesc(desc)
                setLoading(false)
            })
    }, [itemId])

    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'))
   

    const headers = {
        'Authorization': `Bearer ${storedUser.jwt}`
    }

    useEffect(() => {
        setUserName(storedUser.user)
        
    })

    const handleSubmit = e => {
        e.preventDefault()

        const updatedProduct = {
            product:name,  
            price, 
            condition, 
            desc,
            picture
        }

        axios.put(`${process.env.REACT_APP_API_URL}/manage/${itemId}`, updatedProduct, {headers})
            .then(response => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Product successfully updated!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                if (updatedProduct){
                    navigate('/')
                }
            })
            .catch(err => console.log(err))
    }

    const handleUpload = e => {
        const uploadData = new FormData()
        uploadData.append('productImage', e.target.files[0])
        axios.post(`${process.env.REACT_APP_API_URL}/upload`, uploadData, {headers})
            .then(response => {
                setPicture(response.data.url)
                alert('upload ok')
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
                        <img height={500} width={400} src={picture ? picture : 'https://via.placeholder.com/400x500'} alt="product" />
                    </div>
                    <div className="col p-2">
                    <div className="card border border-success rounded p-2" style={{width: '20vw'}}>
                        <div className="card-body">
                            <h5 className="card-title">Atualize as informações do seu produto</h5>
                                <label className="p-2 fw-light">*Formatos permitidos jpg, png e webp.</label>
                                <p className='card-text'>IMAGEM</p>
                                <input
                            className="form-control"
                            type="file" 
                            onChange={e => handleUpload(e)} 
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
                                <option value=""></option>
                                <option value="novo">Novo</option>
                                <option value="usado">Usado</option>
                                <option value="semi-novo">Semi Novo</option>
                                
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
                            <button type='submit' disabled={!picture} className='btn btn-primary'>Enviar</button>
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