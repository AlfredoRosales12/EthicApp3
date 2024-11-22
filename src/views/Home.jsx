import {Button,Box,CssBaseline,ThemeProvider} from '@mui/material';
import {useMediaQuery } from '@mui/material';
import TopBar from '../components/TopBar';
import DrawerMenu from '../components/DrawerMenu';
import CardSlider from '../components/CardSlider';
import { DrawerProvider } from '../components/DrawerContext';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import theme from '../components/theme'; // Importar el tema personalizado
import { useNavigate } from 'react-router-dom';
import '../index.css';

 

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    // Puedes realizar acciones aquí antes de navegar
    console.log('Navegando a Diseño');
    navigate('/CreateDesign');
  };
  const isSmallScreen = useMediaQuery('(max-width:600px)'); // Detecta si la pantalla es pequeña 600 px
  //const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>    
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
            <h1>Bienvenido</h1>  
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr', // Define dos columnas iguales
                gap: 1, // Espacio entre los botones
                padding: '0px',
                height:{ xs: "50px", sm: "200px", md: "300px" },
              }}
            >
              <Button variant="contained" onClick={handleClick} startIcon={<DesignServicesIcon/>}>Diseñar una Actividad</Button>
              <Button variant="contained" startIcon={<UploadFileIcon/>}>Lanzar una Actividad</Button>
              <Button variant="contained">Compartir un Diseño de Actividad</Button>
              <Button variant="contained">Buscar Diseños Compartidos</Button>
            </Box> 
            <h2>Actividades Recientes</h2>
            <Box>
                <CardSlider/>
            </Box>
          </Box>        
        </Box>
      </Box>
    </DrawerProvider>
    </ThemeProvider>
  );
}

export default Home;
