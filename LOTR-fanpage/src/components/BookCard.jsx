export default function BookCard({ book }) {
    return (
        <div className='col'>
            <div className='card h-100 book-card'>
                <div className='card-body'>
                    <h2 className='card-title'>Title: {book.title}</h2>
                    <h2 className='card-subtitle'>Author: {book.author}</h2>
                    <h2 className='card-subtitle'>Public Date: {book.publication_date}</h2>
                </div>
            </div>
        </div>
    )
}