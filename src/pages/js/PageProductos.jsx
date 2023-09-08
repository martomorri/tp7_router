import React from "react";
import FormFiltro from "../../components/PageProductos/js/FormFiltro";
import CarouselProd from "../../components/CarouselProd";
import "../css/PageProductos.css";
import { ProductoShape } from "../../shapes";
import { arrayOf, func, number } from 'prop-types'

function PageProductos({ productos, setProductos, limit }) {
  return (
    <>
      <FormFiltro setProductos={setProductos} limit={limit} />
      <CarouselProd productos={productos} />
    </>
  );
}

PageProductos.propTypes = {
  productos: arrayOf(ProductoShape).isRequired,
  setProductos: func.isRequired,
  limit: number.isRequired
}

export default PageProductos
