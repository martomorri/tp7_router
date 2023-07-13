import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export default function Producto() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  console.log(id);

  let url = "https://dummyjson.com/products/" + id;
  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res);
      setProduct(res.data);
    });
  }, [url]);

  console.log(product);

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p><b>Precio: </b>U$D{product.price}</p>
      <p><b>Rating: </b>{product.rating}⭐</p>
      <img src={product.thumbnail} alt="" />
    </div>
  );
}
