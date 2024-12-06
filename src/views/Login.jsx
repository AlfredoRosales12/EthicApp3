import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Box, Typography } from '@mui/material';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Lógica de autenticación aquí
    navigate('/inicio');
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
      <Typography variant="h4" gutterBottom>Iniciar sesión</Typography>
      <TextField label="Usuario" margin="normal"  />
      <TextField label="Contraseña" type="password" margin="normal" />
      <Button variant="contained" color="primary" onClick={handleLogin}>Ingresar</Button>
    </Box>
  );
}

export default Login;