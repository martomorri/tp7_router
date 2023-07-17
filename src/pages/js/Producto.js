import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "../../components/PageProductos/js/Rating";
import { Carousel, Modal, Button } from "react-bootstrap";
import "../css/Producto.css";

export default function Producto() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  console.log(id);

  let url = "https://dummyjson.com/products/" + id;
  useEffect(() => {
    console.log("hello");
    axios.get(url).then((res) => {
      console.log(res);
      setProduct(res.data);
    });
  }, []);

  console.log(product);
  console.log(product.images);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="row" style={{ margin: 5 }}>
      <div className="col">
        <div className="producto">
          <h1 className="display-1">{product.title}</h1>
          <p>{product.description}</p>
        </div>
      </div>
      <div className="col">
        {product.images && (
          <Carousel>
            {product.images.map((image, index) => (
              <Carousel.Item key={index}>
                <img src={image} alt="" />
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </div>
      <div className="col">
        <span>
          <span class="original-price">U$D {product.price}</span>
          <br />
          <span class="discount">
            <span className="display-4">
              U$D{" "}
              {product.price -
                Math.round(
                  (product.price * product.discountPercentage) / 100
                )}{" "}
            </span>
            {product.discountPercentage}% OFF
          </span>
        </span>
        <Rating rating={product.rating} />
        <div className="row">
          <Link to="/comprar" className="btn btn-primary" type="button">
            Comprar ahora
          </Link>
        </div>
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
              <Modal.Title>{product.title}</Modal.Title>
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
      </div>
    </div>
  );
}
