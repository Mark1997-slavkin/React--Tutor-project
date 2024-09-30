import { Box, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useUserStore } from '../store/user.store'
import { FavoriteBorder } from '@mui/icons-material';

export default function ToolBar({ book }) {

    const [liked, setLiked] = useState(false);
    const { user, setUser } = useUserStore();
    useEffect(() => {
        if (user) {
            const isBookLiked = user?.likedBooks?.some(likedBook => likedBook.id === book.id);
            setLiked(isBookLiked);
        }
    }, [user, book]);
    const toggleLike = (event) => {
        event.stopPropagation()
        setLiked(!liked);
        const bookInUserLikedIndex = user?.likedBooks?.findIndex((likedBook) => {
            return likedBook.id === book.id
        });
        const newUser = { ...user }
        if (bookInUserLikedIndex > -1) {
            newUser?.likedBooks.splice(bookInUserLikedIndex, 1);
        } else {
            newUser?.likedBooks.push(book);
        }
        setUser(newUser);
    };


    if (!user) return;
    return (
        <Box>
            <IconButton onClick={toggleLike}>
                <FavoriteBorder style={{ color: liked ? "red" : "grey" }} />
            </IconButton>
        </Box>
        
    )
}
