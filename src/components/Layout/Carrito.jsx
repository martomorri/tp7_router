import { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { CarritoContext } from '../../context/carritoContext'
import ProductoCarrito from './ProductoCarrito'

function Carrito({ show, handleClose }) {
    const {carrito} = useContext(CarritoContext)
    let body

    console.log(carrito)

    if (carrito.length === 0) body = "Aun no hay productos en el carrito."
    else {
        body = carrito.map(p => <ProductoCarrito producto={p} />)
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Carrito</Modal.Title>
            </Modal.Header>
            <Modal.Body>{body}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Comprar todo
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Carrito