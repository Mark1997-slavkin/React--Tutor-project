import React from 'react'
import BookList from '../components/BookList.component'
import { useUserStore } from '../store/user.store';
export default function FavoritesPage() {
    const { user } = useUserStore();

    return (
        <div>
            <BookList books={user?.likedBooks} />
        </div>
    )
}
