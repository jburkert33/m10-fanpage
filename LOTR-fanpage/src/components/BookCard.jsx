export default function BookCard({ book }) {
    return (
        <div className='col'>
            <div className='card h-100 book-card'>
                <div>

                    <img className='card-img-top' src={`../src/assets/book-covers/book-cover-${book.id}.webp`} alt={book.title} />
                </div>
                <div className='card-body'>
                    <h2 className='card-title'>Title: {book.title}</h2>
                    <h2 className='card-subtitle mb-2 text-body-secondary'>Author: {book.author}</h2>
                    <h2 className='card-subtitle mb-2 text-body-secondary'>Publication Date: {book.publication_date}</h2>
                </div>
            </div>
        </div>
    )
}