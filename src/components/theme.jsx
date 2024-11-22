import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Color principal (azul por defecto)
    },
    secondary: {
      main: '#ff4081', // Color secundario (rosa por defecto)
    },
    background: {
      default: '#f4f4f4', // Fondo de la aplicación
      paper: '#ffffff', // Fondo de tarjetas o papel
    },
    text: {
      primary: '#000000', // Color del texto principal
      secondary: '#757575', // Color del texto secundario
    },
  },
});

export default theme;