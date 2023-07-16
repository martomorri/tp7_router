import React, { useEffect, useState } from "react";
import "../css/PageProductos.css";
import FormFiltro from "../../components/PageProductos/js/FormFiltro";
import CarouselCards from "../../components/PageProductos/js/CarouselCards";
import axios from "axios";

export default function PageProductos() {
  const [productos, setProductos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [skip, setSkip] = useState(0);
  const limit = 100;
  const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data.products);
      setProductos((prevProductos) => [
        ...prevProductos,
        ...res.data.products.map((p) => ({
          id: p.id,
          title: p.title,
          description: p.description,
          price: p.price,
          rating: p.rating,
          image: p.thumbnail,
        })),
      ]);
    });

    axios.get("https://dummyjson.com/products/categories").then((res) => {
      console.log(res);
      setCategories(res.data);
    });
  }, [skip, url]);

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
      setSkip(0);
    });
  };

  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

  const paginatedProductos = chunkArray(productos, 4);

  const handleNext = () => {
    setSkip((prevSkip) => prevSkip + 4);
  };

  const handlePrev = () => {
    if (skip >= 4) {
      setSkip((prevSkip) => prevSkip - 4);
    }
  };

  return (
    <>
      <FormFiltro categories={categories} filterProducts={filterProducts} />
      <CarouselCards paginatedProductos={paginatedProductos} handlePrev={handlePrev} handleNext={handleNext} skip={skip} />
    </>
  );
}
