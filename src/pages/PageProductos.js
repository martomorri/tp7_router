import React, { useEffect, useState } from "react";
import "./PageProductos.css";
import CardProducto from "../components/CardProducto";
import ListaCategorias from "../components/ListaCategorias";
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
      <form className="form-inline my-2 my-lg-0">
        <div className="row">
          <div className="col-md-10">
            <input
              onChange={(e) => filterProducts(e)}
              id="buscar"
              type="text"
              className="form-control"
            />
          </div>
          <div id="divBuscar" className="col-md-2">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Filtrar por categoría
              </button>
              <ul className="dropdown-menu" id="categories">
                {categories.map((c) => (
                  <ListaCategorias categoria={c} key={c.id} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </form>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          {paginatedProductos.map((chunk, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <div className="row">
                {chunk.map((p) => (
                  <CardProducto
                    id={p.id}
                    title={p.title}
                    price={p.price}
                    rating={p.rating}
                    image={p.image}
                    description={p.description}
                    key={p.id}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
          onClick={handlePrev}
          style={{ display: skip === 0 ? "none" : "block" }}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
          onClick={handleNext}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <div id="paginacion">
        <a id="masProductos">Ver más productos</a>
      </div> */}
    </>
  );
}