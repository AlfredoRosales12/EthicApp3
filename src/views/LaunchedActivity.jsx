import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import {DrawerProvider} from '../components/DrawerContext';
import theme from '../components/theme'; // Importar el tema personalizado
import DrawerMenu from "../components/DrawerMenu";
import AppBar from '../components/AppBar';

const ActivityInterface = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)'); // Detecta si la pantalla es pequeña 600 px
  // Simulación de datos
  const activity = {
    title: "Actividad de Ética",
    status: "En curso", // Puede ser "Terminada" o "En curso"
    launchDate: "2024-12-01",
    sessionCode: Math.random().toString(36).substring(2, 10).toUpperCase(),
    stages: ["Introducción", "Desarrollo", "Conclusión"],
    studentsResponded: ["Estudiante 1", "Estudiante 2", "Estudiante 3"],
  };

  const handleShowDesign = () => {
    alert("Mostrando diseño de la actividad...");
  };

  const handleNext = () => {
    alert("Pasando a la siguiente etapa...");
  };

  const handleFinish = () => {
    alert("Actividad terminada.");
  };

  return (
    <ThemeProvider theme={theme}>    
        <DrawerProvider> 
            <CssBaseline />
            <Box sx={{display:'flex'}}>
                <DrawerMenu isSmallScreen={isSmallScreen}/>
                <Box sx={{display:'flex', flexDirection:'column', width:'100%'}}>
                <AppBar isSmallScreen={isSmallScreen} titleBar="Actividad Lanzada"/> 
                    <Box sx={{ padding: 4, maxWidth: 800, margin: "auto" }}>
                    <Paper elevation={3} sx={{ padding: 3 }}>
                        {/* Encabezado */}
                        <Box>
                        <Typography variant="h5" gutterBottom>
                            {activity.title}
                        </Typography>
                        <Typography variant="subtitle1">
                            Estado: <strong>{activity.status}</strong>
                        </Typography>
                        <Typography variant="subtitle2">
                            Fecha de lanzamiento: {activity.launchDate}
                        </Typography>
                        </Box>

                        <Divider sx={{ marginY: 2 }} />

                        {/* Código de la sesión */}
                        <Box>
                        <Typography variant="body1">
                            Código de sesión: <strong>{activity.sessionCode}</strong>
                        </Typography>
                        </Box>

                        <Divider sx={{ marginY: 2 }} />

                        {/* Etapas de la actividad */}
                        <Box>
                        <Typography variant="h6" gutterBottom>
                            Etapas de la actividad:
                        </Typography>
                        <List>
                            {activity.stages.map((stage, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={stage} />
                            </ListItem>
                            ))}
                        </List>
                        </Box>

                        {/* Botones */}
                        <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: 2,
                        }}
                        >
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleShowDesign}
                            sx={{ flex: 1, marginX: 1 }}
                        >
                            Mostrar diseño
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleNext}
                            sx={{ flex: 1, marginX: 1 }}
                        >
                            Siguiente
                        </Button>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={handleFinish}
                            sx={{ flex: 1, marginX: 1 }}
                        >
                            Terminar
                        </Button>
                        </Box>

                        <Divider sx={{ marginY: 2 }} />

                        {/* Estudiantes que han respondido */}
                        <Box>
                        <Typography variant="h6" gutterBottom>
                            Estudiantes que han respondido:
                        </Typography>
                        <List>
                            {activity.studentsResponded.map((student, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={student} />
                            </ListItem>
                            ))}
                        </List>
                        </Box>
                    </Paper>
                    </Box>
                </Box> 
            </Box>      
        </DrawerProvider>     
    </ThemeProvider>    
  );
};

export default ActivityInterface;
