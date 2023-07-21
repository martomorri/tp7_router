import { useState, useEffect } from "react";
import axios from "axios";

export const useProducts = ({ url, id = null }) => {
  const [productos, setProductos] = useState([]);

  console.log(id !== null);

  useEffect(() => {
    console.log("useEffect");
    if (id !== null) {
      console.log("id != null");
      axios.get(url).then((res) => {
        console.log(res);
        setProductos(res.data);
      });
    }
    else {
      console.log("id = null");
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
    }
  }, [url, id]);

  return { productos, setProductos };
};
