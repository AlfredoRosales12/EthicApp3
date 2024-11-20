import {Button,Box,CssBaseline} from '@mui/material';
import {useMediaQuery } from '@mui/material';
import TopBar from './TopBar';
import DrawerMenu from './DrawerMenu';
import { DrawerProvider } from './DrawerContext';



function Home() {
  const isSmallScreen = useMediaQuery('(max-width:600px)'); // Detecta si la pantalla es pequeña 600 px
  //const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <DrawerProvider>    
      <Box sx={{display: 'flex'}}>
        <CssBaseline /> 
        <DrawerMenu isSmallScreen={isSmallScreen}/>      
        <Box sx={{        
          display: 'flex', 
          flexDirection: 'column',
          height: '100vh',
          width:'100%'             
          }}
        >       
          <TopBar isSmallScreen={isSmallScreen}/>      
          <Box sx={{
              flexGrow: 1, // Hace que el contenido ocupe el espacio restante
              p: 3,
              overflow: 'auto', // Habilita el scroll si el contenido excede la pantalla        
            }}
          >                
            <h1>Bienvenido a la página principal</h1>  
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr', // Define dos columnas iguales
                gap: 1, // Espacio entre los botones
                padding: '16px',
              }}
            >
              <Button variant="contained">Diseñar una Actividad</Button>
              <Button variant="contained">Lanzar una Actividad</Button>
              <Button variant="contained">Compartir un Diseño de Actividad</Button>
              <Button variant="contained">Buscar Diseños Compartidos</Button>
            </Box>        
          </Box>        
        </Box>
      </Box>
    </DrawerProvider>
  );
}

export default Home;
