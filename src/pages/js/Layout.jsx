import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../../components/Layout/Nav";
  import Footer from "../../components/Layout/Footer";
import "../css/Layout.css";


export default function Layout({ categories }) {
  return (
    <>
      <Nav categories={categories} />
      <Outlet />
      {<Footer />}
    </>
  );
}
