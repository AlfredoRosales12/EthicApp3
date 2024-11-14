// src/components/Home.js
import React, { useState } from 'react';
import { Box, Toolbar } from '@mui/material';
import TopBar from './TopBar';
import DrawerMenu from './DrawerMenu';

function Home() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <TopBar toggleDrawer={toggleDrawer} />
      <DrawerMenu isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Toolbar />
        <h1>Bienvenido a la página principal</h1>
        {/* Aquí puedes agregar más componentes de MUI para enriquecer la interfaz */}
      </Box>
    </Box>
  );
}

export default Home;
