import { Box } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';
import ToolBar from './ToolBar.component';

export default function BookCard({ book }) {
    const navigate = useNavigate()
    const handleCardClick = () => {
        navigate(`/book/${book.id}`);
    }
    const descriptionStyle = {
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    };

    return (
        <Box className="flex flex-col items-center book-card" onClick={handleCardClick}>
            <h2>{book.title}</h2>
            <p style={descriptionStyle}>{book.summary}</p>
            <img src={book.image} alt={book.title} className="book-img" />
            <ToolBar book={book} />
        </Box>
    );
}
