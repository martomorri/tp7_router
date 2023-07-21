import { useSkip } from "../hooks/useSkip";
import CardProducto from "./PageProductos/js/CardProducto";
import './Carousel.css'

export default function Carousel({ images, productos = [null] }) {
  let carousel_inner;
  const {paginatedProductos, handleNext, handlePrev} = useSkip({productos});

  console.log(images);

  if (images) {
    carousel_inner =
      images &&
      images.map((image, index) => (
        <div
          className={`carousel-item ${index === 0 ? "active" : ""}`}
          key={index}
        >
          <img src={image} alt="" />
        </div>
      ));
  }
  else {
    carousel_inner = paginatedProductos.map((chunk, index) => (
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
      ))
  }
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">{carousel_inner}</div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
        onClick={handlePrev}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true">
          <img
            className="icons"
            src="https://icons.veryicon.com/png/o/internet--web/flatten-icon/previous-8.png"
            alt=""
          />
        </span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
        onClick={handleNext}
      >
        <span className="carousel-control-next-icon" aria-hidden="true">
          <img
            className="icons"
            src="https://icons.veryicon.com/png/o/business/iconpack-003/next-40.png"
            alt=""
          />
        </span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
