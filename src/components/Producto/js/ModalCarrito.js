import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function ModalCarrito(props) {
  const navigate = useNavigate();

  return (
    <div className="row">
      <button
        className="btn btn-dark"
        type="button"
        onClick={props.handleModalOpen}
      >
        Agregar al carrito
      </button>
      <Modal show={props.showModal} onHide={props.handleModalClose}>
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
          <Button variant="dark" onClick={props.handleModalClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
