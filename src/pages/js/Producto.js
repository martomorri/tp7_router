import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "../../components/PageProductos/js/Rating";
import CarouselImages from "../../components/Producto/js/CarouselImages";
import ModalCarrito from "../../components/Producto/js/ModalCarrito";
import "../css/Producto.css";

export default function Producto() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [showModal, setShowModal] = useState(false);

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
        <CarouselImages images={product.images} />
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
        <ModalCarrito showModal={showModal} handleModalClose={handleModalClose} product={product} handleModalOpen={handleModalOpen} />
      </div>
    </div>
  );
}
