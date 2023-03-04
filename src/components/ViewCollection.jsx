import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'
import '../components/ViewCollection.css'


const ViewCollection = () => {
    const [products, setProduct] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/products`)
            .then(response => {
                setProduct(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    console.log(products)

    return (
        <div className="ViewCollectionPage">
            <div className="">
                <div className="">
                    <h3 className='p-3'>Temos { products.length } produtos disponiveis</h3>
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