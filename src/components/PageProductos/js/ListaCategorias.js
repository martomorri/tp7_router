import React from 'react';

export default function ListaCategorias(props) {
    return (
        <>
        <li><button className="dropdown-item">{props.categoria}</button></li>
        </>
    )
}