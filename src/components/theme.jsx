import { createTheme } from '@mui/material/styles';
import '@fontsource/montserrat-alternates';
import '@fontsource/montserrat-alternates/600.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4B5998', // Color principal (azul por defecto)
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
      laptop: 1024,
      tablet: 640,
      mobile: 0,
      desktop: 1280,
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