import { useState } from "react";

export const useSkip = ({productos}) => {
  const [skip, setSkip] = useState(0);

  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

  let paginatedProductos = null;
  if (productos) {
    paginatedProductos = chunkArray(productos, 4);
  }

  const handleNext = () => {
    setSkip((prevSkip) => prevSkip + 4);
  };

  const handlePrev = () => {
    if (skip >= 4) {
      setSkip((prevSkip) => prevSkip - 4);
    }
  };

  return {paginatedProductos, handleNext, handlePrev}
};
