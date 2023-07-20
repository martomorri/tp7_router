import { useState, useEffect } from "react";
import axios from "axios";

export const useProducts = ({url}) => {
    const [productos, setProductos] = useState([]);

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
    }, [url]);
    
    return { productos, setProductos }
  }