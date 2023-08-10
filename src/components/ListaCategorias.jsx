import { Link } from 'react-router-dom'

export default function ListaCategorias({ categoria }) {
    return (
        <>
            <li>
                <Link to={'/categoria/' + categoria.toLowerCase()} className="dropdown-item">{categoria}</Link>
            </li>
        </>
    )
}