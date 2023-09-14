import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../../context/carritoContext";

export default function Comprar() {
    const { monto, isCarrito } = useParams()
    console.log(isCarrito)
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const {setCarrito} = useContext(CarritoContext)

    const handleModalOpen = () => {
        if (isCarrito === 'true') setCarrito([])
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <div class="container">
                <h1>Datos de pago</h1>
                <form>
                    <div class="form-row">
                        <div class="col">
                            <label>Nombre</label>
                            <input type="text" class="form-control" placeholder="First name" />
                        </div>
                        <div class="col">
                            <label>Apellido</label>
                            <input type="text" class="form-control" placeholder="Last name" />
                        </div>
                    </div>
                    <p></p>
                    <div class="form-row">
                        <div class="col">
                            <label>Numero de tarjeta</label>
                            <input type="text" class="form-control" placeholder="XXXX XXXX XXXX XXXX" />
                        </div>
                        <div class="col">
                            <label>Fecha de vencimiento</label>
                            <input type="month" class="form-control" placeholder="MM/AA" />
                        </div>
                    </div>
                    <p></p>
                    <div class="form-row">
                        <label>Codigo de seguridad</label>
                    </div>
                    <div class="form-row">
                        <div class="col-sm-1">
                            <input type="text" class="form-control" placeholder="***" />
                        </div>
                    </div>
                </form><br />
                <h1>Datos de envio</h1>
                <form>
                    <div class="form-row">
                        <div class="col">
                            <label>Pais</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col">
                            <label>Ciudad</label>
                            <input type="text" class="form-control" />
                        </div>
                    </div>
                    <p></p>
                    <div class="form-row">
                        <div class="col">
                            <label>Calle</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col">
                            <label>Numero</label>
                            <input type="text" class="form-control" />
                        </div>
                    </div>
                    <p></p>
                    <div class="form-row">
                        <div className="col">
                            <label>Codigo postal</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div className="col">
                            <label>Num. de telefono</label>
                            <input type="text" class="form-control" />
                        </div>
                    </div>
                </form>
                <h1>Monto a pagar: U$D{monto}</h1><br />
                <div class="text-center">
                    <Link
                        to={'/'}
                        className="btn btn-dark"
                    >
                        Volver a la Home
                    </Link>
                    <button type="submit" class="btn btn-primary" data-toggle="modal" onClick={handleModalOpen}>Confirmar compra</button>
                </div>
            </div>
            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Compra realizada</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Su compra ha sido procesada con exito
                </Modal.Body>
                <Modal.Footer>
                    <Link
                        to={".."}
                        onClick={(e) => {
                            e.preventDefault();
                            navigate(-1);
                        }}
                        className="btn btn-primary"
                    >
                        Seguir comprando
                    </Link>
                </Modal.Footer>
            </Modal>
        </>
    )
}
