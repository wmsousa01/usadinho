import React from 'react'
import Carousel from '../components/Carousel'
import Bike from '../images/bike.png'

const ProductPage = () => {
  return (
    <div>
        <Carousel />
        <div>
            <h1>Bicicleta vintage com pouco uso</h1>
        </div>
        <div>
            <h2>R$ 300</h2>
            <p>Usada / Bom Estado</p>
            <p>Linda bike, precisa de uns ajustes minimos mas ainda da pro gasto</p>
        </div>
        <button>COMPRAR</button>
        <div>
            <h1>Comentários</h1>
            <textarea name="comments" id="comments" cols="100" rows="5"></textarea>
            <button>ENVIAR</button>
        </div>
    </div>
  )
}

export default ProductPage