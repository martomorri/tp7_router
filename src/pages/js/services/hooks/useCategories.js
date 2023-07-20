import axios from "axios";
import { useEffect, useState } from "react";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
      axios.get("https://dummyjson.com/products/categories").then((res) => {
        console.log(res);
        setCategories(res.data);
      });
  }, [])

  return { categories };
};
