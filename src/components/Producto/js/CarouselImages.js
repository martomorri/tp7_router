import React from "react";

export default function CarouselImages({images}) {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        {images && images.map((image, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <img src={image} alt="" />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"><img className="icons" src="https://icons.veryicon.com/png/o/internet--web/flatten-icon/previous-8.png" alt="" /></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"><img className="icons" src="https://icons.veryicon.com/png/o/business/iconpack-003/next-40.png" alt="" /></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
