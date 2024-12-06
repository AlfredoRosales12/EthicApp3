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
import DynamicBreadcrumbs from '../components/Breadcrumb'

function CreateDesign() {
  const isSmallScreen = useMediaQuery('(max-width:600px)'); // Detecta si la pantalla es pequeña 600 px

  //const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>    
      <DrawerProvider> 
        <CssBaseline />    
        <Box sx={{display: 'flex', width:'100%'}}>
          
          <DrawerMenu isSmallScreen={isSmallScreen}/>               
          <Box sx={{        
            display: 'flex', 
            flexDirection: 'column',
            height: '100%',
            width:'100%'                            
            }}
          >       
            <AppBar isSmallScreen={isSmallScreen} titleBar="Crear Diseño de Actvidad"/>          
            <Box sx={{               
                margin:'15px 50px',
                  
              }}
            >        
              <Box
                component="form"
                sx={{ display: 'flex', 
                  flexDirection: 'column',
                  gap: '10px',
                  width:'100%',
                  maxWidth:'100%'                
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
                <Typography sx={{ margin: '2px' }} variant="h6">
                  Etapas de la actividad
                </Typography>             
                <StagesMenu/>                         
              </Box>
              <Box sx={{display:'flex', width:'400px',gap:'15px', paddingLeft:'40px', alignItems: 'center',justifyContent: 'space-between',marginBottom:"25px",height:'50px' }}>            
                <Button variant="contained" sx={{width:"100%", height:"100%", fontSize:'12px'}}>
                  Guardar y<br/>Lanzar Actividad
                </Button>
                <Button variant="contained" sx={{width:"100%", height:"100%"}}>
                  Guardar<br/>Actividad
                </Button>                 
              </Box>     
            </Box>           
          </Box>       
        </Box>
      </DrawerProvider>    
    </ThemeProvider>    
  );
}

export default CreateDesign;
