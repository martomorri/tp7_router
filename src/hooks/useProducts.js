import { useState, useEffect } from "react";
import axios from "axios";

export const useProducts = ({ url, id = null }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    if (id !== null) {
      axios.get(url).then((res) => {
        setProductos(res.data);
      });
    }
    else {
      axios.get(url).then((res) => {
        setProductos((prevProductos) => [
          ...prevProductos,
          ...res.data.products.map((p) => ({
            id: p.id,
            title: p.title,
            description: p.description,
            price: p.price,
            rating: p.rating,
            thumbnail: p.thumbnail,
          })),
        ]);
      });
    }
  }, [url, id]);

  return { productos, setProductos };
};
