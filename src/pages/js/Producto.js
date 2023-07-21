import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Rating from "../../components/PageProductos/js/Rating";
import Carousel from "../../components/Carousel";
import ModalCarrito from "../../components/Producto/ModalCarrito";
import { useProducts } from "../../hooks/useProducts";
import "../css/Producto.css";

export default function Producto() {
  const { id } = useParams();
  const url = "https://dummyjson.com/products/" + id;
  const {productos} = useProducts({url, id});

  return (
    <div className="row" style={{ margin: 5 }}>
      <div className="col">
        <div className="producto">
          <h1 className="display-1">{productos.title}</h1>
          <p>{productos.description}</p>
        </div>
      </div>
      <div className="col">
        <Carousel images={productos.images} />
      </div>
      <div className="col">
        <span>
          <span class="original-price">U$D {productos.price}</span>
          <br />
          <span class="discount">
            <span className="display-4">
              U$D{" "}
              {productos.price -
                Math.round(
                  (productos.price * productos.discountPercentage) / 100
                )}{" "}
            </span>
            {productos.discountPercentage}% OFF
          </span>
        </span>
        <Rating rating={productos.rating} />
        <div className="row">
          <Link to="/comprar" className="btn btn-primary" type="button">
            Comprar ahora
          </Link>
        </div>
        <ModalCarrito product={productos} />
      </div>
    </div>
  );
}
