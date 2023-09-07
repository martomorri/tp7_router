import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ListaCategorias from "../ListaCategorias";
import Carrito from "./Carrito";
import "./NavItem.css";

export default function NavItem({dropdown = false, item, path = "", logo = false, categories}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(path)
  
  if (dropdown) {
    return (
      <li className="nav-item dropdown">
        <button
          id="nav-dropdown"
          className="btn btn-light dropdown-toggle"
          href="#"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {item}
        </button>
        <ul className="dropdown-menu">
          {categories.map((c) => (
            <ListaCategorias categoria={c} key={c.id} />
          ))}
        </ul>
      </li>
    );
  } else if (logo) {
    return (
      <li className="nav-item">
        <Link to={"/" + path}>{item}</Link>
      </li>
    );
  }
  else if (path === 'carrito') {
    return (
      <li className="nav-item">
        <button className="btn btn-light" onClick={handleShow}>{item}</button>
        <Carrito show={show} handleClose={handleClose}></Carrito>
      </li>
    )
  }
  return (
    <li className="nav-item">
      <Link className="btn btn-light" to={"/" + path}>
        {item}
      </Link>
    </li>
  );
}
