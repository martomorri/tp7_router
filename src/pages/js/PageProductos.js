import React from "react";
import "../css/PageProductos.css";
import FormFiltro from "../../components/PageProductos/js/FormFiltro";
import CarouselCards from "../../components/PageProductos/js/CarouselCards";
import axios from "axios";
import { useProducts } from "./services/hooks/useProducts";
import { useCategories } from "./services/hooks/useCategories";
import { useSkip } from "./services/hooks/useSkip";

export default function PageProductos() {
  const limit = 100;
  const url = `https://dummyjson.com/products?limit=${limit}&skip=0`;
  const {productos, setProductos} = useProducts({url});
  const {categories} = useCategories();
  const {paginatedProductos, handleNext, handlePrev} = useSkip({productos});

  const filterProducts = (e) => {
    let text = e.target.value;
    const searchUrl = `https://dummyjson.com/products/search?q=${text}&limit=${limit}`;
    axios.get(searchUrl).then((res) => {
      console.log(res);
      setProductos(
        res.data.products.map((p) => ({
          id: p.id,
          title: p.title,
          description: p.description,
          price: p.price,
          rating: p.rating,
          image: p.thumbnail,
        }))
      );
    });
  };

  return (
    <>
      <FormFiltro categories={categories} filterProducts={filterProducts} />
      <CarouselCards paginatedProductos={paginatedProductos} handlePrev={handlePrev} handleNext={handleNext} />
    </>
  );
}
