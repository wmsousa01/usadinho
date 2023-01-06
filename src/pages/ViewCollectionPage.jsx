import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/Card'


const ViewCollectionPage = () => {
    const [products, setProduct] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/usadinho`)
            .then(response => {
                setProduct(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="ViewCollectionPage">
            <div className="row">
                <div className="col">
                    <h1>Temos { products.length } produtos disponiveis</h1>
                </div>
            </div>
            <div className="row">
                { products.length && (
                    <>
                        {
                            products.map(product => {
                                return <Card key={product._id} product={product} />
                            })
                        }
                    </>
                ) }
            </div>
        </div>
    )
}

export default ViewCollectionPage