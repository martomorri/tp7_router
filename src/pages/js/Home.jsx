import Carousel from "../../components/Carousel";
import { useState, useEffect } from "react";
import CardProducto from "../../components/PageProductos/js/CardProducto";
import { Spinner } from "react-bootstrap";

export default function Home({ productos }) {
    const [cincoProductos, setCincoProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const copy = productos
        const productosMezclados = copy.sort(() => 0.5 - Math.random())
        setCincoProductos(productosMezclados.slice(0, 5))
        setLoading(false)
    }, [productos])

    return (
        loading ? <center><Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner></center> :
            <>
                <Carousel images={["https://i.dummyjson.com/data/products/11/thumbnail.jpg",
                    "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
                    "https://i.dummyjson.com/data/products/99/thumbnail.jpg",
                    "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
                    "https://i.dummyjson.com/data/products/39/thumbnail.jpg"]}></Carousel>
                <div className="row">
                    {cincoProductos.map(p => (
                        <div className="col-2">
                            <CardProducto
                                id={p.id}
                                title={p.title}
                                price={p.price}
                                rating={p.rating}
                                image={p.thumbnail}
                                description={p.description}
                                key={p.id}
                            />
                        </div>
                    ))}
                </div>
            </>
    )
}
