import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../css/Layout.css";

export default function Layout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/">
                  <img
                    className="logo"
                    src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.22.13/mercadolibre/logo__large_plus.png"
                    alt=""
                  />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-light" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-light" to="/productos">
                  Productos
                </Link>
              </li>
              <li className="nav-item dropdown">
                <button
                  id="nav-dropdown"
                  className="btn btn-light dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorias
                </button>
                <ul className="dropdown-menu"></ul>
              </li>
              <li className="nav-item">
                <Link className="btn btn-light" to="/contacto">
                  Contacto
                </Link>
              </li>
            </ul>
            <ul id="login" className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="btn btn-light" to="/carrito">
                  <img className="icon" src="https://static-00.iconduck.com/assets.00/shopping-cart-icon-512x462-yrde1eu0.png" alt="" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-light" to="/login">
                  <img className="icon" src="https://cdn-icons-png.flaticon.com/512/3106/3106921.png" alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
