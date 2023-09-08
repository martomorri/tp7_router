import { Carousel } from "react-bootstrap";
import { useState, useEffect } from "react";
import CardProducto from "../../components/PageProductos/js/CardProducto";
import { Spinner } from "react-bootstrap";
import "../css/CarouselHome.css";
import { arrayOf } from 'prop-types' 
import { ProductoShape } from "../../shapes";

function Home({ productos }) {
    const [cincoProductos, setCincoProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [prodRandom, setProdRandom] = useState({})
    console.log(productos)
    const getProductoRandom = (productos) => {
        const random = Math.floor(Math.random() * productos.length)
        return productos[random]
    }

    useEffect(() => {
        if (productos && productos.length > 0) {
            const copy = [...productos]
            const productosMezclados = copy.sort(() => 0.6 - Math.random())
            setCincoProductos(productosMezclados.slice(0, 6))
            const prodRandom = getProductoRandom(productos)
            setProdRandom(prodRandom)
            setLoading(false)
            console.log(prodRandom)
        }
    }, [productos])


    return (
        loading ? <center><Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner></center> :
            <>
                <Carousel className="carouselHome">
                    {prodRandom.images.map(imgSrc => (
                            <Carousel.Item >
                                <img
                                id="imgHome"
                                className="d-block w-20"
                                src={imgSrc}
                                alt={prodRandom.title}
                                />
                            </Carousel.Item>
                    ))}
                </Carousel>
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

Home.propTypes = {
    productos: arrayOf(ProductoShape).isRequired
}

export default Home
