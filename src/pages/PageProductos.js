import React from "react";
import "./PageProductos.css";
import { useEffect, useState } from "react";
import CardProducto from "../components/CardProducto";
import ListaCategorias from "../components/ListaCategorias";
import axios from "axios";
import RowCards from "../components/RowCards";

export default function PageProductos() {
  const [productos, setProductos] = useState([]);
  const [categories, setCategories] = useState([]);
  let skip = 0;
  const limit = 30;
  let url = "https://dummyjson.com/products?limit=" + limit + "&skip=" + skip;

  useEffect(() => {
    url = "https://dummyjson.com/products?limit=" + limit + "&skip=" + skip;
    axios.get(url).then((res) => {
      console.log(res.data.products);
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
    url = "https://dummyjson.com/products/categories";
    axios.get(url).then((res) => {
      console.log(res);
      setCategories(res.data);
    });
  }, []);

  const filterProducts = (e) => {
    let text = e.target.value;
    url = "https://dummyjson.com/products/search?q=" + text;
    axios.get(url).then((res) => {
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
                Filtrar por categoria
              </button>
              <ul className="dropdown-menu" id="categories">
                {categories.map((c) => (
                  <ListaCategorias categoria={c} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </form>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
            <RowCards productos={productos} />
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* <div id="paginacion">
      <a id="masProductos">Ver mas productos</a>
    </div> */}
    </>
  );
}
