import React from "react";
import ListaCategorias from "./ListaCategorias";
import axios from "axios";
import '../css/FormFiltro.css';

export default function FormFiltro(props) {
  const filterProducts = (e) => {
    let text = e.target.value;
    const searchUrl = `https://dummyjson.com/products/search?q=${text}&limit=${props.limit}`;
    axios.get(searchUrl).then((res) => {
      props.setProductos(
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
              {props.categories.map((c) => (
                <ListaCategorias categoria={c} key={c.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </form>
  );
}
