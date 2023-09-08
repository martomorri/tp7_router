import React from "react";
import CardProducto from "./CardProducto";
import { arrayOf } from 'prop-types'
import { ProductoShape } from "../../../shapes";

function RowCards({productos}) {
  return (
    <div className="row">
      {productos.map((p) => (
        <CardProducto
          id={p.id}
          title={p.title}
          price={p.price}
          rating={p.rating}
          image={p.image}
          description={p.description}
        />
      ))}
    </div>
  );
}

RowCards.propTypes = {
  productos: arrayOf(ProductoShape).isRequired
}

export default RowCards
