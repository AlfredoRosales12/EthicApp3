import * as React from 'react';
import { useState } from "react";
import {Button,Box,CssBaseline,ThemeProvider,Typography} from '@mui/material';
import {useMediaQuery } from '@mui/material';
import AppBar from '../components/AppBar';
import DrawerMenu from '../components/DrawerMenu';
import {DrawerProvider} from '../components/DrawerContext';
import theme from '../components/theme'; // Importar el tema personalizado
import TextField from '@mui/material/TextField';
import FileUpload from '../components/FileUpload';
import StagesMenu from '../components/StagesMenu';
import SaveIcon from '@mui/icons-material/Save';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import DynamicBreadcrumbs from '../components/Breadcrumb';


function CreateDesign() {
  const isSmallScreen = useMediaQuery('(max-width:600px)'); // Detecta si la pantalla es pequeña 600 px

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };  

  return (
    <ThemeProvider theme={theme}>    
      <DrawerProvider> 
        <CssBaseline />    
        <Box sx={{display: 'flex', width:'100%'}}>
          
          <DrawerMenu isSmallScreen={isSmallScreen}/>               
          <Box sx={{        
            display: 'flex', 
            flexDirection: 'column',
            minHeight: '100vh',
            height: '100%',
            width:'100%'                            
            }}
          >       
            <AppBar isSmallScreen={isSmallScreen} titleBar="Crear Diseño de Actvidad"/>          
            <Box sx={{               
                margin:'15px 60px',                                  
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
                <TextField 
                  id="outlined-basic" 
                  helperText={value ? "Texto ingresado" : "Este campo es obligatorio"} //cambia el texto de Ayuda
                  color={value ? "success" : "error"} // Cambia el color según el estado
                  label="Título" 
                  variant="outlined" 
                  slotProps={{input: {readOnly:false,},}}
                  value={value}
                  onChange={handleChange} // Actualiza el estado al escribir
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: value ? "green" : "red",
                      },
                      "&:hover fieldset": {
                        borderColor: value ? "darkgreen" : "darkred",
                      },
                    },
                  }}
                />
                <Typography sx={{ margin: '2px' }} variant="h6">
                  Agregar Documento de Apoyo
                </Typography>             
                <FileUpload/>
                <Typography sx={{ margin: '2px' }} variant="h6">
                  Etapas de la actividad
                </Typography>             
                <StagesMenu/>                         
              </Box>
              <Box sx={{display:'flex', width:'500px',gap:'15px', paddingLeft:'40px', alignItems: 'center',justifyContent: 'space-between',marginBottom:"25px",height:'50px' }}>            
                <Button variant="contained" startIcon={<Box sx={{display:'flex', gap:'10px'}}><SaveIcon fontSize="small" /><RocketLaunchIcon fontSize="small" /></Box>} sx={{
                  width:"100%", height:"100%", fontSize:'12px', 
                  background: '#28A745',
                  textTransform: "none", // Evita que el texto esté en mayúsculas
                  fontWeight: "bold",
                  borderRadius: "8px", // Bordes ligeramente redondeados
                  padding: "8px 16px", // Espaciado cómodo
                  
                  }}>
                  Guardar y<br/>Lanzar Actividad
                </Button>
                <Button variant="contained" startIcon={<SaveIcon fontSize="small" />} sx={{
                  width:"100%", height:"100%", fontSize:'12px',                 
                  background:'#388E3C',                  
                  textTransform: "none", // Evita que el texto esté en mayúsculas
                  fontWeight: "bold",
                  borderRadius: "8px", // Bordes ligeramente redondeados
                  padding: "8px 16px", // Espaciado cómodo
                }}>
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
