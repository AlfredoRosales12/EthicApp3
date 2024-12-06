import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Tabs,
  Tab,
  TextField,
  Divider,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import {DrawerProvider} from '../components/DrawerContext';
import theme from '../components/theme'; // Importar el tema personalizado
import DrawerMenu from "../components/DrawerMenu";
import AppBar from '../components/AppBar';

const ActivityTable = () => {

    const isSmallScreen = useMediaQuery('(max-width:600px)'); // Detecta si la pantalla es pequeña 600 px

  const [tabIndex, setTabIndex] = useState(0); // 0: Actuales, 1: Terminadas, 2: Archivadas
  const [search, setSearch] = useState("");

  // Datos simulados
  const activities = [
    { id: 1, title: "Actividad 1", stages: 5, launchDate: "2023-12-01", code: "ACT123" },
    { id: 2, title: "Actividad 2", stages: 3, launchDate: "2023-11-15", code: "ACT456" },
    { id: 3, title: "Actividad 3", stages: 7, launchDate: "2023-10-20", code: "ACT789" },
  ];

  // Filtrar actividades según el término de búsqueda
  const filteredActivities = activities.filter((activity) =>
    activity.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ThemeProvider theme={theme}>    
        <DrawerProvider> 
            <CssBaseline />
            <Box sx={{display:'flex'}}>
                <DrawerMenu isSmallScreen={isSmallScreen}/>
                <Box sx={{display:'flex', flexDirection:'column', width:'100%'}}>
                    <AppBar isSmallScreen={isSmallScreen} titleBar="Actividades Lanzadas"/> 
                    
                    <Box
                    sx={{
                        padding: 3,
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                    }}
                    >
                    {/* Botón para lanzar una nueva actividad */}
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ alignSelf: "flex-start" }}
                        onClick={() => alert("Crear nueva actividad")}
                    >
                        Lanzar Nueva Actividad
                    </Button>

                    {/* Tabs para alternar entre las páginas */}
                    <Paper>
                        <Tabs
                        value={tabIndex}
                        onChange={(e, newValue) => setTabIndex(newValue)}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        >
                        <Tab label="Actuales" />
                        <Tab label="Terminadas" />
                        <Tab label="Archivadas" />
                        </Tabs>
                    </Paper>

                    {/* Buscador */}
                    <TextField
                        variant="outlined"
                        placeholder="Buscar actividad..."
                        fullWidth
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        sx={{ maxWidth: 400 }}
                    />

                    {/* Tabla */}
                    <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
                        <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                            <TableCell>
                                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                Título
                                </Typography>
                            </TableCell>
                            <TableCell align="center">
                                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                No. de Etapas
                                </Typography>
                            </TableCell>
                            <TableCell align="center">
                                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                Fecha de Lanzamiento
                                </Typography>
                            </TableCell>
                            <TableCell align="center">
                                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                Código
                                </Typography>
                            </TableCell>
                            <TableCell align="center">
                                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                Acciones
                                </Typography>
                            </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredActivities.map((activity) => (
                            <TableRow key={activity.id} hover>
                                <TableCell>
                                <Typography>{activity.title}</Typography>
                                </TableCell>
                                <TableCell align="center">
                                <Typography>{activity.stages}</Typography>
                                </TableCell>
                                <TableCell align="center">
                                <Typography>{activity.launchDate}</Typography>
                                </TableCell>
                                <TableCell align="center">
                                <Typography>{activity.code}</Typography>
                                </TableCell>
                                <TableCell align="center">
                                <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
                                    <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    onClick={() => alert(`Ir a actividad: ${activity.id}`)}
                                    >
                                    Ir a Actividad
                                    </Button>
                                    <Button
                                    variant="outlined"
                                    color="secondary"
                                    size="small"
                                    onClick={() =>
                                        alert(`Crear nueva actividad basada en: ${activity.title}`)
                                    }
                                    >
                                    Crear Similar
                                    </Button>
                                </Box>
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                        </Table>
                    </TableContainer>
                    </Box>
                </Box>        
            </Box>
        </DrawerProvider>     
    </ThemeProvider>  
  );
};

export default ActivityTable;
