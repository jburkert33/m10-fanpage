export default function FilmCard({ film }) {
    return (
        <div className='col'>
            <div className='card h-100 film-card' >
                <div>
                    <img className='card-img-top' src={`../src/assets/film-covers/film-cover-${film.id}.webp`} alt={film.title} />
                </div>
                <div className='card-body'>
                    <h2 className='card-title '>Title: {film.title}</h2>
                    <h2 className='card-subtitle  mb-2 text-body-secondary'>Director: {film.director}</h2>
                    <h2 className='card-subtitle  mb-2 text-body-secondary'>Release Date: {film.release_date}</h2>
                </div>
            </div>
        </div>
    )
}