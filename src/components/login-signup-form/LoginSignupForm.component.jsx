import React, { useState } from 'react';
import {
  Button,
  TextField,
  Typography,
  Container,
  Grid,
  Paper,
} from '@mui/material';
import { userService } from '../../services/user.services';
import constants from './LoginSignupForm.constants';
const {generalFields,signupFields} = constants
const LoginSignupForm = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(userService.getEmptyUser());

  const handleChange = (e) => {
    const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here, you can add the code to send formData to your backend
  };

  const fields = [
    ...generalFields,
    ...(isSignup? signupFields : [])
  ]
  return (
    <Container  maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5">{isSignup ? 'Sign Up' : 'Log In'}</Typography>
        <form onSubmit={handleSubmit}>
            {fields.map(field => {
                const {displayName, name, type} = field
                return <TextField
                type={type}
                key={name}
            margin="normal"
            fullWidth
            name={name}
            label={displayName}
            value={formData[name]}
            onChange={handleChange}
            required
          />
            })}
          <Button type="submit" fullWidth variant="contained" color="primary">
            {isSignup ? 'Sign Up' : 'Log In'}
          </Button>
          <Button
            onClick={() => setIsSignup(!isSignup)}
            fullWidth
            variant="text"
            style={{ marginTop: '10px' }}
          >
            {isSignup ? 'Already have an account? Log In' : "Don't have an account? Sign Up"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginSignupForm;
