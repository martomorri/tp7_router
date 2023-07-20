import React from "react";
import FormFiltro from "../../components/PageProductos/js/FormFiltro";
import CarouselCards from "../../components/PageProductos/js/CarouselCards";
import { useProducts } from "../../hooks/useProducts";
import { useCategories } from "../../hooks/useCategories";
import { useSkip } from "../../hooks/useSkip";
import "../css/PageProductos.css";

export default function PageProductos() {
  const limit = 100;
  const url = `https://dummyjson.com/products?limit=${limit}&skip=0`;
  const {productos, setProductos} = useProducts({url});
  const {categories} = useCategories();
  const {paginatedProductos, handleNext, handlePrev} = useSkip({productos});

  return (
    <>
      <FormFiltro categories={categories} setProductos={setProductos} limit={limit} />
      <CarouselCards paginatedProductos={paginatedProductos} handlePrev={handlePrev} handleNext={handleNext} />
    </>
  );
}
