import React from 'react';
import { Link } from 'react-router-dom';

export default function TableProducto(props) {
    return (
        <tbody>
            <th>{props.id}</th>
            <td>{props.title}</td>
            <td>U$D{props.price}</td>
            <td>{props.rating}</td>
            <td><Link to={"/productos/" + props.id} className="btn btn-warning">Ver Mas</Link></td>
        </tbody>
    )
}