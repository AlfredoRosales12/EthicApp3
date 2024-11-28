import * as React from 'react';
import {Button,Box,CssBaseline,ThemeProvider,Typography} from '@mui/material';
import {useMediaQuery } from '@mui/material';
import AppBar from '../components/AppBar';
import DrawerMenu from '../components/DrawerMenu';
import {DrawerProvider} from '../components/DrawerContext';
import theme from '../components/theme'; // Importar el tema personalizado
import TextField from '@mui/material/TextField';
import FileUpload from '../components/FileUpload';
import StagesMenu from '../components/StagesMenu';


function CreateDesign() {
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
          width:'100%', 
          maxWidth:'100%',         
          }}
        >       
          <AppBar isSmallScreen={isSmallScreen}/>
          <Box sx={{
              flexGrow: 1, // Hace que el contenido ocupe el espacio restante
              p: 3,
              overflow: 'auto', // Habilita el scroll si el contenido excede la pantalla 
              width:'100%',       
            }}
          >        
            <Box
              component="form"
              sx={{ display: 'flex', 
                flexDirection: 'column',
                gap: '5px',
              }}
              noValidate
              autoComplete="off"
            >
            <Typography sx={{ margin: '2px' }} variant="h6">
            Título de la Actividad
            </Typography>  
            <TextField id="outlined-basic" helperText="Este campo es obligatorio"  label="Título" variant="outlined" slotProps={{input: {readOnly:false,},}}/>
            <Typography sx={{ margin: '2px' }} variant="h6">
              Agregar Documento de Apoyo
            </Typography> 
            
            <FileUpload/> 
            <StagesMenu/>
            </Box>     
          </Box>  
        </Box>        
      </Box>
    </DrawerProvider>    
    </ThemeProvider>    
  );
}

export default CreateDesign;
