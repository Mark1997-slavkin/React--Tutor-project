import React from 'react'
import BookCard from './BookCard.component';

export default function BookList({ books }) {
    console.log(books);

    return (
        <div className='book-list'>
            {books?.map(book => (
                <BookCard book={book} key={book.id} />
            ))}

        </div>
    )
}
