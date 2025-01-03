export default function FilmCard({ film }) {
    return (
        <div className='col'>
            <div className='card h-100 film-card' >
                <div className='card-body'>
                    <h2 className='card-title'>Title: {film.title}</h2>
                    <h2 className='card-subtitle'>Director: {film.director}</h2>
                    <h2 className='card-subtitle'>Release Date: {film.release_date}</h2>
                </div>
            </div>
        </div>
    )
}