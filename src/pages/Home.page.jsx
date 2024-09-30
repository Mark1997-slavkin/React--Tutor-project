import React from 'react'
import BookList from '../components/BookList.component'
import { useBookStore } from '../store/book.store';
export default function HomePage() {
    const { books } = useBookStore();
    return (
        <div>
            <BookList books={books} />
        </div>
    )
}
