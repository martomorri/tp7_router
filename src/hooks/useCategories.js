import axios from "axios";
import { useEffect, useState } from "react";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);

  const capitalizeFirstLetter = (str) =>
    `${str[0].toUpperCase()}${str.slice(1)}`;

  useEffect(() => {
    axios.get("https://dummyjson.com/products/categories").then((res) => {
      const capitalizedCategories = res.data.map(capitalizeFirstLetter);
      setCategories(capitalizedCategories);
    });
  }, []);

  return { categories };
};
