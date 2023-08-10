import { useEffect, useState } from 'react'
import axios from 'axios'
import Carousel from '../../components/Carousel'
import { useParams } from 'react-router-dom'

export default function ProductosXCategoria() {
    const { cat } = useParams()
    const [productos, setProductos] = useState([])

    useEffect(() => {
        const url = 'https://dummyjson.com/products/category/' + cat
        axios.get(url)
            .then(res => {
                console.log(res)
                setProductos(res.data.products)
            })
    }, [cat])

    return (
        <>
            <Carousel productos={productos} />
        </>
    )
}