import { useContext } from 'react'
import { CarritoContext } from '../../context/carritoContext'
import Rating from '../PageProductos/js/Rating'
import { ProductoShape } from '../../shapes'
import './ProductoCarrito.css'

function ProductoCarrito({ producto }) {
    const {carrito, setCarrito} = useContext(CarritoContext)

    const handleDelete = id => {
        setCarrito (
            carrito.filter(p => p.id !== id)
        )
    }

    return (
        <div id="producto" className="row">
            <div className="col">
                <img src={producto.thumbnail} width="80px" alt="" />
            </div>
            <div className="col">
                <p id="titulo">{producto.title}</p>
            </div>
            <div className="col">
                <p>U$D{producto.price}</p>
            </div>
            <div className="col">
                <Rating rating={producto.rating} />
            </div>
            <div className="col">
                <button onClick={() => handleDelete(producto.id)} className='btn' id="borrar">X</button>
            </div>
        </div>
    )
}

ProductoCarrito.propTypes = {
    producto: ProductoShape.isRequired
}

export default ProductoCarrito
