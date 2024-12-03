import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import LogoutIcon from '@mui/icons-material/Logout';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';

const BottomDrawerBox = ({ isDarkMode, toggleTheme }) => {
  return (
    <Box sx={{ p: 2, borderTop: '1px solid #e0e0e0' }}>
      <Box display="flex" alignItems="center" gap={2} mb={2}>
        <Avatar src="/path-to-profile-picture.jpg" alt="User Profile" />
        <Typography variant="subtitle1">Alfredo Rosales</Typography>
      </Box>

      <List>
        {/* Configuración */}
        <ListItemButton>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Configuración" />
        </ListItemButton>

        {/* Lenguaje */}
        <ListItemButton>
          <ListItemIcon>
            <LanguageIcon />
          </ListItemIcon>
          <ListItemText primary="Idioma" />
        </ListItemButton>

        {/*Cerrar Sesión */}
        <ListItemButton>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Cerrar Sesión" />
        </ListItemButton>
        
      </List>
    </Box>
  );
};

export default BottomDrawerBox;