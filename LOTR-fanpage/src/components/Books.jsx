import { useState, useEffect } from "react";

import BookCard from "./BookCard";

export default function Books() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('https://lotrapi.co/api/v1/books')
            .then(res => res.json())
            .then(setBooks)
            .catch(console.errors)
    }, [])

    if (!books) {
        return null;
    }

    return (
        <div className='container'>
            <h1>Books</h1>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                {books.map(book => (
                    <BookCard book={book} ket={book.id} />
                ))}
            </div>
        </div>
    )

}