import { Link } from 'react-router-dom'
import { string } from 'prop-types'

function ListaCategorias({ categoria }) {
    return (
        <>
            <li>
                <Link to={'/categoria/' + categoria.toLowerCase()} className="dropdown-item">{categoria}</Link>
            </li>
        </>
    )
}

ListaCategorias.propTypes = {
    categoria: string.isRequired
}

export default ListaCategorias
