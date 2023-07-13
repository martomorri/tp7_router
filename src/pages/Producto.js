import React from 'react';

export default function Producto(props) {
    return(
        <div>
            <h1>{props.producto}</h1>
            <p>{props.descripcion}</p>
            <b>Precio: </b><p>U$D{props.precio}</p>
            <b>Rating: </b><p>{props.precio}⭐</p>
            <img src={props.imagen} />
        </div>
    )
}