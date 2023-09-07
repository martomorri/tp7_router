import Rating from '../PageProductos/js/Rating'
import './ProductoCarrito.css'

export default function ProductoCarrito({ producto }) {
    return (
        <div id="producto" className="row">
            <div className="col">
                <img src={producto.thumbnail} width="80px" />
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
                <button className='btn' id="borrar">X</button>
            </div>
        </div>
    )
}