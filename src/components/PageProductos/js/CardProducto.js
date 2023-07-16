import React from "react";
import { Link } from "react-router-dom";
import "../css/CardProducto.css";
import Rating from "./Rating";

export default function CardProducto(props) {
  // console.log(props);
  return (
    <div className="card">
      <img src={props.image} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <Rating rating={props.rating} />
        <p className="card-text">{props.description}</p>
        <p className="card-text">
          <b>Precio: </b>U$D{props.price}
        </p>
        <Link to={"/productos/" + props.id} className="btn btn-warning">
          Ver Mas
        </Link>
      </div>
    </div>
  );
}
