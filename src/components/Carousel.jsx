import React from 'react'
import Bike from '../images/bike.png'
import Bike2 from '../images/bike2.jpeg'

const Carousel = () => {
  return (
    <div>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Bike} width={500} height={400} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={Bike2} width={500} height={400} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={Bike} width={500} height={400} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

export default Carousel