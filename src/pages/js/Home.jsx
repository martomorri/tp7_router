import Carousel from "../../components/Carousel";
import { useState, useEffect } from "react";
import CardProducto from "../../components/PageProductos/js/CardProducto";

export default function Home({ productos }) {
    const [random, setRandom] = useState([]);

    console.log(productos)

    useEffect(() => {
        generateRandoms(productos)
    }, [])

    const generateRandoms = (productos) => {
        for (let i = 0; i < 6; i++) {
            let r = Math.floor(Math.random() * productos.length)
            console.log(r);
            // while (random.includes(r)) {
            //     r = Math.floor(Math.random() * productos.length)
            // }
            setRandom([...random, r])
        }
    }

    return (
        <>
            <div className="row">
                {random.map((r) => (
                    <div className="col-2">
                        <CardProducto
                            id={productos[r].id}
                            title={productos[r].title}
                            price={productos[r].price}
                            rating={productos[r].rating}
                            image={productos[r].image}
                            description={productos[r].description}
                            key={productos[r].id}
                        />
                    </div>
                ))}
            </div>
            <Carousel></Carousel>
        </>
    )
}
