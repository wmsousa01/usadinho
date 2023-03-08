import { Link, useNavigate, useParams } from "react-router-dom"
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

const Form = () => {
    const [imageUrl, setImageUrl] = useState('https://via.placeholder.com/400x500')
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [condition, setCondition] = useState('')
    const [desc, setDesc] = useState('')
    const [loading, setLoading] = useState(true)
    const [picture, setPicture] = useState('')
    
    const { itemId } = useParams()

    const navigate = useNavigate()

    const token = localStorage.getItem('token')

        const headers = {
            'Authorization': 'Bearer ' + token
        }


    const handleSubmit = e => {
        e.preventDefault()

        const updatedProduct = {
            product:name,  
            price, 
            condition, 
            desc,
            picture
        }
        
        console.log(updatedProduct)

        axios.post(`${process.env.REACT_APP_API_URL}/manage`, updatedProduct, {headers})
        .then(response => {
            Swal.fire({
                title: 'Produto cadastrado!',
                text: 'Seu produto foi cadastrado com sucesso!',
                icon: 'success',
                confirmButtonText: 'Confirmar'
                
            })
            
            refreshPage()
            
        })
        .catch(err => console.log(err))
}

        const handleUpload = e => {
            const uploadData = new FormData()
            uploadData.append('productImage', e.target.files[0])
            axios.post('http://localhost:3001/upload', uploadData, {headers})
                .then(response => {
                    setPicture(response.data.url)
                    alert('upload ok')
                })
                .catch(err => console.log(err))
        }
        console.log(picture)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/products/${itemId}`)
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

    
       

    function refreshPage() {
        setTimeout(() => {
        window.location.reload(false);
      }, 2000); }

  return (
    <div>  
        <div className="row">
            <div className="col">
                        <img width={400} src={imageUrl ? imageUrl : 'https://via.placeholder.com/400x500'} alt="product" />
            </div>
          <div className="col">
            <form onSubmit={handleSubmit}>
                <div className="card" style={{width: '20vw'}}>
                    <div className="card-body">
                        <h5 className="card-title">Querendo divulgar aquelas bugigangas que não usa mais?</h5>
                        <p className='card-text'>IMAGEM</p>
                        <input 
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
            </form>
            
        </div>
      </div>
    </div>
  )
}

export default Form