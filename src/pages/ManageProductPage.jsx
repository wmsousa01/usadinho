import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'
import Form from "../components/Form"

const ManageProductPage = () => {
    const [product, setProduct] = useState([])
    const [refresh, setRefresh] = useState(false)

    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'))
   

    const headers = {
        'Authorization': `Bearer ${storedUser.jwt}`
    }

   
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/manage`, {headers})
            .then(response => {
                setProduct(response.data)
            })
            .catch(err => console.log(err))
    }, [refresh])

    const deleteProduct = productId => {
        axios.delete(`${process.env.REACT_APP_API_URL}/manage/${productId}`, {headers})
            .then(response => {
                setRefresh(!refresh)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div>
                <h1>Cadastre um novo produto</h1>
                <Form />
            </div>

        <div className="ManageItemsPage mt-5 border border-success rounded">
            <div className="row">
                <div className="col">
                    <h2 className="mt-2 text-uppercase">Gerencie seus produtos</h2>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    { product.length > 0 && (
                    <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Preço</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.map(product => {
                                return (
                                    <tr key={product._id}>
                                        <td>{ product.product }</td>
                                        <td>R$ { Number(product.price).toFixed(2) }</td>
                                        <td>
                                            <Link className='btn btn-primary me-2' to={`/ProductPage/${product._id}`}>Ver</Link>
                                            <Link className='btn btn-primary me-2' to={`/ProductPage/${product._id}/edit`}>Editar</Link>
                                            <button className="btn btn-danger" onClick={() => deleteProduct(product._id)}>Deletar</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                    )}
                </div>
            </div>
        </div>
        </div>
    )
}

export default ManageProductPage