import React from "react";
import CardProducto from "./CardProducto";

export default function RowCards({productos}) {
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
