import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, IconButton,Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { DrawerContext } from './DrawerContext'; // Importa el contexto
import HomeIcon from '@mui/icons-material/Home';

function TopBar({isSmallScreen}){
  const { isDrawerOpen, toggleDrawer } = useContext(DrawerContext); // Usa el contexto
  return (
    <AppBar position="static" color="" elevation={0}>
      <Toolbar sx={{p:0, backgroundImage:'linear-gradient(45deg,#1A3578 , #2649EC)'}}>
      <Box sx={{display:'flex',alignItems:'baseline'}}>        
        {isSmallScreen ? (          
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={()=>toggleDrawer(true)}>
            <MenuIcon sx={{color:'#ffff', marginLeft:2}} />
          </IconButton>       
        ):(
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={()=>toggleDrawer(true)}>
            <HomeIcon sx={{color:'#ffff'}} />
          </IconButton>  
        )          
        }
        <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: 'white' }}>
          Inicio
        </Typography>
        </Box>
        
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;