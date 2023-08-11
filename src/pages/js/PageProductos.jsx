import React from "react";
import FormFiltro from "../../components/PageProductos/js/FormFiltro";
import CarouselProd from "../../components/CarouselProd";
import "../css/PageProductos.css";

export default function PageProductos({ productos, setProductos, limit }) {
  return (
    <>
      <FormFiltro setProductos={setProductos} limit={limit} />
      <CarouselProd productos={productos} />
    </>
  );
}
