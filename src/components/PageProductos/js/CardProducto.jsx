import React from "react";
import { Link } from "react-router-dom";
import "../css/CardProducto.css";
import Rating from "./Rating";
import { string, number } from 'prop-types'

function CardProducto(props) {
  return (
    <div className="card">
      <img id="imgCard" src={props.image} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <Rating rating={props.rating} />
        <p className="card-text">{props.description}</p>
        <p className="card-text">
          <b>Precio: </b>U$D{props.price}
        </p>
        <Link to={"/productos/" + props.id} className="btn btn-light">
          Ver Mas
        </Link>
      </div>
    </div>
  );
}

CardProducto.propTypes = {
  image: string.isRequired,
  title: string.isRequired,
  description: string.isRequired,
  price: number.isRequired,
  id: number.isRequired
}

export default CardProducto
