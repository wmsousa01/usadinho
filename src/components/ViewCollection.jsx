import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'
import '../components/ViewCollection.css'


const ViewCollection = () => {
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
            <div className="">
                <div className="">
                    <h1>Temos { products.length } produtos disponiveis</h1>
                </div>
            </div>
            
                <div>
                { products.length && (
                    <div className='CardsSide'>
                        {
                            products.map(product => {
                                return <Card key={product._id} product={product} />
                            })
                        }
                        </div>
                ) }
                </div>
            
        </div>
    )
}

export default ViewCollection