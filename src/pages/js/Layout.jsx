import React from "react";
import { Outlet } from "react-router-dom";
import NavList from "../../components/Layout/NavList";
import Footer from "../../components/Layout/Footer";
import "../css/Layout.css";

export default function Layout({ categories }) {
  const navItems = [
    {
      item: (
        <img
          className="logo"
          src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.22.13/mercadolibre/logo__large_plus.png"
          alt=""
        />
      ),
      logo: true,
      position: "left",
    },
    {
      item: "Home",
      position: "left",
    },
    {
      item: "Productos",
      path: "productos",
      position: "left",
    },
    {
      item: "Categorias",
      dropdown: true,
      categories: categories,
      position: "left",
    },
    {
      item: "Contacto",
      path: "contacto",
      position: "left",
    },
    {
      item: (
        <img
          className="icon"
          src="https://static-00.iconduck.com/assets.00/shopping-cart-icon-512x462-yrde1eu0.png"
          alt=""
        />
      ),
      path: "carrito",
      position: "right",
    },
    {
      item: (
        <img
          className="icon"
          src="https://cdn-icons-png.flaticon.com/512/3106/3106921.png"
          alt=""
        />
      ),
      path: "login",
      position: "right",
    },
  ];

  const navItemsLeft = navItems.filter(i => i.position === "left");
  const navItemsRight = navItems.filter(i => i.position === "right");

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <NavList listPosition="left" navItems={navItemsLeft} />
            <NavList listPosition="right" navItems={navItemsRight} />
          </div>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}
