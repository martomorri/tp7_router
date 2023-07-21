import React from "react";
import CardProducto from "./CardProducto";
import '../css/CarouselCards.css';

export default function CarouselCards(props) {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        {props.paginatedProductos.map((chunk, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <div className="row">
              {chunk.map((p) => (
                <CardProducto
                  id={p.id}
                  title={p.title}
                  price={p.price}
                  rating={p.rating}
                  image={p.image}
                  description={p.description}
                  key={p.id}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
        onClick={props.handlePrev}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"><img className="icons" src="https://icons.veryicon.com/png/o/internet--web/flatten-icon/previous-8.png" alt="" /></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
        onClick={props.handleNext}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"><img className="icons" src="https://icons.veryicon.com/png/o/business/iconpack-003/next-40.png" alt="" /></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
