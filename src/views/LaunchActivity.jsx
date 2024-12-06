import React, { useState } from "react";
import { Box, Typography, TextField, Button,ThemeProvider } from "@mui/material";
import ActivityTable from "../components/ActivitiesTable";
import activities from "../data/activities";
import DrawerMenu from '../components/DrawerMenu';
import {useMediaQuery } from '@mui/material';
import {DrawerProvider} from '../components/DrawerContext';
import AppBar from '../components/AppBar';
import theme from '../components/theme'; // Importar el tema personalizado
import InfoBox from '../components/InfoBox';

function LaunchActivity() {
  const [filter, setFilter] = useState("");
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleFilterChange = (e) => setFilter(e.target.value);

  const handleSelectActivity = (activity) => setSelectedActivity(activity);

  const handleLaunchActivity = () => {
    if (selectedActivity) {
      alert(`¡Actividad seleccionada para lanzar: ${selectedActivity.name}!`);
    } else {
      alert("Por favor selecciona una actividad.");
    }
  };

  const handleModifyActivity = (activity) => {
    alert(`Modificando: ${activity.name}`);
  };

  const handleChangePage = (event, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const isSmallScreen = useMediaQuery('(max-width:600px)'); // Detecta si la pantalla es pequeña 600 px
  const messageBox= "Puedes lanzar un diseño de actividad todas las veces que quieras.Cuando un diseño es lanzado, EthicApp genera un código de acceso que puedes entregar a tus estudiantes para unirse a participar.";
  return (
    <ThemeProvider theme={theme}>   
    <DrawerProvider>
    <Box sx={{display:'flex', width:'100%', height:'100%'}}>        
        <DrawerMenu isSmallScreen={isSmallScreen}/>
        <Box sx={{display:'flex', flexDirection:'column', width:'100%', height:'100%'}}>
            <AppBar isSmallScreen={isSmallScreen} titleBar="Lanzar Actividad"/>
            <Box sx={{display:'flex', height:'60%', m:2, gap:'10%'}}>               
                <Box
                    sx={{                   
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    gap:3,
                    p: 3,
                    width:'50%'
                }}
                >        
                    Aquí puedes escoger un diseño de actividad para trabajar con tus estudiantes en EthicApp.
                    <TextField
                        label="Buscar por nombre o fecha"
                        variant="outlined"
                        value={filter}
                        onChange={handleFilterChange}
                        sx={{ mb: 3, width: "100%", maxWidth: 500 }}
                    />
                
                    <ActivityTable
                        activities={activities}
                        filter={filter}
                        onSelectActivity={handleSelectActivity}
                        selectedActivity={selectedActivity}
                        onModifyActivity={handleModifyActivity}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />

                    <Button
                        variant="contained"
                        sx={{
                        mt: 3,
                        bgcolor: "#2649EC",
                        color: "#ffffff",
                        "&:hover": { bgcolor: "#1e3dbb" },
                        }}
                        onClick={handleLaunchActivity}
                    >
                        Lanzar Actividad Seleccionada
                    </Button>
                </Box>
                <InfoBox message={messageBox}/>
            </Box>
        </Box> 
        
    </Box>
    </DrawerProvider> 
    </ThemeProvider>
  );
}

export default LaunchActivity;
