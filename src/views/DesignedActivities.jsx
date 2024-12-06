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
  Divider,
  Switch,
  ThemeProvider,
  CssBaseline,
  useMediaQuery,
} from "@mui/material";
import {DrawerProvider} from '../components/DrawerContext';
import theme from '../components/theme'; // Importar el tema personalizado
import DrawerMenu from "../components/DrawerMenu";
import AppBar from '../components/AppBar';

const ActivityDesignsView = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)'); // Detecta si la pantalla es pequeña 600 px
  const [tabIndex, setTabIndex] = useState(0); // 0: Mis Diseños, 1: Diseños de Otros

  // Datos simulados
  const myDesigns = [
    { id: 1, name: "Diseño 1", shared: true },
    { id: 2, name: "Diseño 2", shared: false },
    { id: 3, name: "Diseño 3", shared: true },
  ];

  const otherDesigns = [
    { id: 4, name: "Diseño 4", shared: false },
    { id: 5, name: "Diseño 5", shared: true },
    { id: 6, name: "Diseño 6", shared: false },
  ];

  const currentDesigns = tabIndex === 0 ? myDesigns : otherDesigns;

  // Acciones de botones
  const handleLaunch = (id) => alert(`Lanzar actividad: Diseño ${id}`);
  const handleEdit = (id) => alert(`Editar diseño: Diseño ${id}`);
  const handleView = (id) => alert(`Ver diseño: Diseño ${id}`);
  const handleDelete = (id) => alert(`Eliminar diseño: Diseño ${id}`);
  const handleShareToggle = (id) =>
    alert(`Cambiar estado de compartir: Diseño ${id}`);

  return (
    <ThemeProvider theme={theme}>    
        <DrawerProvider> 
            <CssBaseline />
            <Box sx={{display:'flex'}}>
                <DrawerMenu isSmallScreen={isSmallScreen}/>
                <Box sx={{display:'flex', flexDirection:'column', width:'100%'}}>
                    <AppBar isSmallScreen={isSmallScreen} titleBar="Diseño de Actividades"/> 
                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        onClick={() => handleLaunch(design.id)}
                                        sx={{width:'90px'}}
                                    >
                                        Crear Nuevo Diseño
                                    </Button>
                    <Box
                    sx={{
                        display: "flex",
                        flexDirection: { mobile: "column", md: "row" },
                        padding: 3,
                        gap: 3,
                    }}
                    >
                    {/* Contenido principal */}
                    <Box sx={{ flex: 3 }}>
                        {/* Tabs para alternar vistas */}
                        <Paper sx={{ marginBottom: 2 }}>
                        <Tabs
                            value={tabIndex}
                            onChange={(e, newValue) => setTabIndex(newValue)}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                        >
                            <Tab label="Mis Diseños" />
                            <Tab label="Diseños de Otros" />
                        </Tabs>
                        </Paper>

                        {/* Tabla */}
                        <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
                        <Table>
                            <TableHead>
                            <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                                <TableCell>
                                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                    Nombre del Diseño
                                </Typography>
                                </TableCell>
                                <TableCell>
                                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                    Acciones
                                </Typography>
                                </TableCell>
                                <TableCell align="center">
                                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                    Compartir
                                </Typography>
                                </TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {currentDesigns.map((design) => (
                                <TableRow key={design.id} hover>
                                <TableCell>
                                    <Typography>{design.name}</Typography>
                                </TableCell>
                                <TableCell>
                                    <Box sx={{ display: "flex", gap: 1 }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        onClick={() => handleLaunch(design.id)}
                                    >
                                        Lanzar
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        size="small"
                                        onClick={() => handleEdit(design.id)}
                                    >
                                        Editar
                                    </Button>
                                    <Button
                                        variant="text"
                                        size="small"
                                        onClick={() => handleView(design.id)}
                                    >
                                        Ver
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        size="small"
                                        onClick={() => handleDelete(design.id)}
                                    >
                                        Eliminar
                                    </Button>
                                    </Box>
                                </TableCell>
                                <TableCell align="center">
                                    <Switch
                                    checked={design.shared}
                                    onChange={() => handleShareToggle(design.id)}
                                    />
                                </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                    </Box>

                    {/* Caja informativa */}
                    <Box
                        sx={{
                        flex: 1,
                        padding: 2,
                        border: "1px solid #ccc",
                        borderRadius: 2,
                        backgroundColor: "#f9f9f9",
                        }}
                    >
                        <Typography variant="h6" gutterBottom>
                        Información de la Vista
                        </Typography>
                        <Divider sx={{ marginY: 1 }} />
                        <Typography variant="body1">
                        En esta página puedes:
                        </Typography>
                        <ul>
                            <li>
                            Alternar entre tus diseños de actividades y los creados por otros
                            usuarios.
                            </li>
                            <li>Lanzar, editar, ver o eliminar diseños de actividades.</li>
                            <li>
                            Controlar si un diseño es compartido usando el interruptor en la
                            tabla.
                            </li>
                        </ul>
                        
                    </Box>
                    </Box>
                </Box>
            </Box>
        </DrawerProvider>     
    </ThemeProvider> 
  );
};

export default ActivityDesignsView;
