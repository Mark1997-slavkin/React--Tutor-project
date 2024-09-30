import React from 'react';
import { useParams } from 'react-router';
import { booksMock } from '../utils/mocks/book.mock';
import { Box, Container, Typography } from '@mui/material';
import ToolBar from '../components/ToolBar.component';

export default function BookPage() {
    const { bookId } = useParams();
    const book = booksMock.find(book => +bookId === book.id);

    return (
        <Container>
            <Box sx={{ mx: "20px", display: "flex", gap: "15px", flexDirection: "column", alignItems: "center" }}>
                <Box sx={{ width: "400px", textAlign: "center", mt: "80px", boxShadow: 3, borderRadius: "10px", p: "20px", backgroundColor: "#f5f5f5" }}>
                    <img src={book.image} alt={book.title} style={{ width: "100%", maxHeight: "80%", borderRadius: "10px" }} />
                    <ToolBar book={book} />
                </Box>

                <Box sx={{ textAlign: "center", width: "50%" }}>
                    <Typography variant="h4" sx={{ fontWeight: "bold", mb: "20px" }}>{book.title}</Typography>

                    
                    <Typography variant="body1" sx={{ mt: "20px", whiteSpace: "pre-line" }}>
                        {book.description}
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}
