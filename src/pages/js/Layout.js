import React from "react";
import { Outlet } from "react-router-dom";
import NavItem from "../../components/Layout/NavItem";
import "../css/Layout.css";

export default function Layout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavItem
                item={
                  <img
                    className="logo"
                    src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.22.13/mercadolibre/logo__large_plus.png"
                    alt=""
                  />
                }
                logo = {true}
              />
              <NavItem item="Home" />
              <NavItem item="Productos" path="productos" />
              <NavItem item="Categorias" dropdown={true} />
              <NavItem item="Contacto" path="contacto" />
            </ul>
            <ul id="login" className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavItem
                item={
                  <img
                    className="icon"
                    src="https://static-00.iconduck.com/assets.00/shopping-cart-icon-512x462-yrde1eu0.png"
                    alt=""
                  />
                }
                path="carrito"
              />
              <NavItem
                item={
                  <img
                    className="icon"
                    src="https://cdn-icons-png.flaticon.com/512/3106/3106921.png"
                    alt=""
                  />
                }
                path="login"
              />
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
