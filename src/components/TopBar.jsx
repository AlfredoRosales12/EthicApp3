import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { DrawerContext } from './DrawerContext'; // Importa el contexto

function TopBar({isSmallScreen}){
  const { isDrawerOpen, toggleDrawer } = useContext(DrawerContext); // Usa el contexto
  return (
    <AppBar position="static" color="" elevation={0}>
      <Toolbar>
        {isSmallScreen && (
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={()=>toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Inicio
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;