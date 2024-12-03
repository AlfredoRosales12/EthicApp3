import {Button,Box,CssBaseline,ThemeProvider, Typography} from '@mui/material';
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
import ButtonGroupHome2 from '../components/ButtonGroupHome2';

 

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
      <CssBaseline />   
      <DrawerProvider>    
        <Box sx={{display: 'flex'}}>
          <DrawerMenu isSmallScreen={isSmallScreen}/>
          <Box sx={{display:'flex', flexDirection:'column', height:'100%', width:'100%'}}>       
            <TopBar isSmallScreen={isSmallScreen}/>
            <Box sx={{display:'flex', flexDirection:'column', gap:'2px', m:'10px 25px'}}>
              <Typography variant="h1" component="div" sx={{ flexGrow: 1, fontSize:'40px'}}>                
                Bienvenido
              </Typography>                              
              Diseña una nueva actividad para realizar con tu curso, o lanza una actividad basada en algún diseño. 
              <br/>
              También puedes compartir una actividad con colegas y buscar actividades compartidas por otros.
            </Box>
            <ButtonGroupHome2/> {/*Botones del Inicio*/}  
            <Box sx={{display:'flex', flexDirection:'column', gap:'15px', m:'0px 25px'}}>              
              <Typography variant="h3" component="div" sx={{ flexGrow: 1, fontSize:'35px' }}>                
                Actividades Recientes              
              </Typography>
              <CardSlider/>
            </Box>                 
          </Box>
        </Box>
      </DrawerProvider>
    </ThemeProvider>
  );
}

export default Home;
