// src/components/DrawerMenu.js
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function DrawerMenu({ isOpen, toggleDrawer }) {
  return (
    <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
      <List>
        <ListItem button onClick={() => console.log('Navegar a Inicio')}>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Inicio" />
        </ListItem>
        <ListItem button onClick={() => console.log('Navegar a Perfil')}>
          <ListItemIcon><AccountBoxIcon /></ListItemIcon>
          <ListItemText primary="Perfil" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default DrawerMenu;
