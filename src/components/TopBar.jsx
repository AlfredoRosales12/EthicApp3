// src/components/TopBar.js
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function TopBar({ toggleDrawer }) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Mi Aplicación
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
