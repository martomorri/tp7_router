import { string, number, arrayOf, shape, oneOfType, object, bool } from 'prop-types'

export const ProductoShape = shape({
    id: number.isRequired,
    title: string.isRequired,
    description: string.isRequired,
    price: number.isRequired,
    rating: number.isRequired,
    thumbnail: string.isRequired,
    images: arrayOf(string).isRequired
})

export const NavItemShape = shape({
    item: oneOfType([string, object]).isRequired,
    logo: bool,
    path: string,
    dropdown: bool,
    categories: arrayOf(string)
})