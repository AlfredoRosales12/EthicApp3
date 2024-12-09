import { createTheme } from '@mui/material/styles';
import '@fontsource/montserrat-alternates';
import '@fontsource/montserrat-alternates/600.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a3578', // Color principal (azul por defecto)
      gradient: 'linear-gradient(45deg,#1A3578 , #2649EC)', // Degradado personalizado.
    },
    secondary: {
      main: '#9B8753', // Color secundario 
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
  breakpoints: {
    values: {
      xs: 0,
      sm: 1024,
      md: 1280,
      lg: 1440,
    },
  },

  typography: {
    fontFamily: '"Montserrat Alternates", Arial, sans-serif', // Especifica la fuente aquí
    h1: {
      fontSize: '4rem', // Personaliza variantes (opcional)
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
});

export default theme;