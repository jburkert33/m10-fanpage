import { useState, useEffect } from "react";

import FilmCard from "./FilmCard";

export default function Films() {
    const [films, setFilms] = useState([])

    useEffect(() => {
        fetch('https://lotrapi.co/api/v1/films')
            .then(res => res.json())
            .then(setFilms)
            .catch(console.error)
    }, [])

    if (!films) {
        return null;
    }
    return (
        <div className='container'>
            <h1>Films</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {films.results.map(film => {
                    <FilmCard film={film} key={film.id} />
                })}
            </div>
        </div>
    );
}