import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container } from '@mui/material';

export default function ContactPage() {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

   /// ask EDEN to explain why do we write like this after the setFormData and why in the from itself do we need to write the value, for example value:formData.name
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });

    };

 
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', formData);
        
    };

    return (
        <Container>
            <Box sx={{ mt: "120px", textAlign: "center" }}>
                <Typography variant="h3" sx={{ mb: "20px", fontWeight: "bold", color: "#3F51B5" }}>
                    Contact Us
                </Typography>
                <Typography variant="body1" sx={{ mb: "40px", color: "#555", fontSize: "1.2rem" }}>
                    We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
                </Typography>

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "20px",
                        maxWidth: "500px",
                        margin: "0 auto",
                        boxShadow: 3,
                        padding: "30px",
                        borderRadius: "10px",
                        backgroundColor: "#f5f5f5"
                    }}
                >
                    <TextField
                        fullWidth
                        label="Your Name"
                        variant="outlined"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        sx={{ backgroundColor: "white" }}
                    />
                    <TextField
                        fullWidth
                        label="Your Email"
                        variant="outlined"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        sx={{ backgroundColor: "white" }}
                    />
                    <TextField
                        fullWidth
                        label="Your Message"
                        variant="outlined"
                        multiline
                        rows={6}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        sx={{ backgroundColor: "white" }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: "20px", backgroundColor: "#3F51B5", color: "white", padding: "10px 20px" }}
                    >
                        Send Message
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}
