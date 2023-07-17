import React from 'react';
import '../css/Rating.css';

export default function Rating({rating}) {
    const total = 5;
    let empty = total - Math.floor(rating);
    const emptyStar = '☆';
    const star = '★';
    const stars = star.repeat(rating) + emptyStar.repeat(empty);
    return (
        <p className='rating'>{stars}</p>
    )
}