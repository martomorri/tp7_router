import React from "react";
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
      </div>
    </form>
  );
}
