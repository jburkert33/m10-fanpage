export default function FilmCard({ film }) {
    return (
        <div className='col'>
            <div className='card h-100'>
                <div>
                    {/* TODO: Grab image for each film */}
                    <img></img>
                </div>
                <div className='card-body'>
                    <h2 className='card-title'>Title: {film.title}</h2>
                    <h3 className='card-subtitle'>Director: {film.director}</h3>
                    <h3 className='card-subtitle'>Release Date: {film.release_date}</h3>
                </div>
            </div>
        </div>
    )
}