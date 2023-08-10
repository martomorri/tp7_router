import React from "react";
import FormFiltro from "../../components/PageProductos/js/FormFiltro";
import Carousel from "../../components/Carousel";
import "../css/PageProductos.css";

export default function PageProductos({ productos, setProductos, limit }) {
  return (
    <>
      <FormFiltro setProductos={setProductos} limit={limit} />
      <Carousel productos={productos} />
    </>
  );
}
