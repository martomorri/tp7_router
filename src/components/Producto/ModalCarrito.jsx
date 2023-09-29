import React from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../../context/carritoContext";
import { arrayOf } from 'prop-types'
import { ProductoShape } from "../../shapes";

function ModalCarrito(props) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const {carrito, setCarrito} = useContext(CarritoContext)

  const handleModalOpen = () => {
    setCarrito([...carrito, props.product])
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="row">
      <button
        className="btn btn-dark"
        type="button"
        onClick={handleModalOpen}
      >
        Agregar al carrito
      </button>
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.product.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          El producto ha sido añadido a su carrito correctamente
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
          <Button variant="dark" onClick={handleModalClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

ModalCarrito.propTypes = {
  product: arrayOf(ProductoShape).isRequired
}

export default ModalCarrito
