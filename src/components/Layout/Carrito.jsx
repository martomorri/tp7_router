import { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/carritoContext'
import ProductoCarrito from './ProductoCarrito'
import { bool, func } from 'prop-types'

function Carrito({ show, handleClose }) {
    const { carrito } = useContext(CarritoContext)
    let body, footer
    let monto = 0

    carrito.forEach(p => {
        monto += p.price
    })

    console.log(carrito)

    if (carrito.length === 0) {
        body = "Aun no hay productos en el carrito."
        footer = <Button variant="secondary" onClick={handleClose}>
            Cerrar
        </Button>
    }
    else {
        body = carrito.map(p => <ProductoCarrito producto={p} />)
        footer = <><Button variant="secondary" onClick={handleClose}>
            Cerrar
        </Button>
            <Link to={"/comprar/" + monto + "/" + true} type="button">
                <Button variant="primary" onClick={handleClose}>
                    Comprar todo
                </Button>
            </Link></>
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Carrito</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {body}
                <p>Monto total: U$D<span>{monto}</span></p>
            </Modal.Body>
            <Modal.Footer>
                {footer}
            </Modal.Footer>
        </Modal>
    )
}

Carrito.propTypes = {
    show: bool.isRequired,
    handleClose: func.isRequired
}

export default Carrito