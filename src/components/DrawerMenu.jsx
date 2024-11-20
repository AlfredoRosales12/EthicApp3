// src/components/DrawerMenu.js
import React, { useContext } from 'react';
import {Drawer,useMediaQuery} from '@mui/material';
import NavListDrawer from './NavListDrawer';
import HomeIcon from '@mui/icons-material/Home';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DrawIcon from '@mui/icons-material/Draw';
import { DrawerContext } from './DrawerContext'; // Importa el contexto

const navLinks = [
  {
    title:"Inicio", path:"#", icon:<HomeIcon/>
  },
  {
    title:"Lanzar Actividad", path:"#", icon:<RocketLaunchIcon/>
  },
  {
    title:"Actividad", path:"#", icon:<AssignmentIcon/>
  },
  {
    title:"Diseños", path:"#", icon:<DrawIcon/>
  }
]

function DrawerMenu({isSmallScreen}) {
  const { isDrawerOpen, toggleDrawer } = useContext(DrawerContext); // Usa el contexto  
  return (
    <Drawer anchor="left" open={isDrawerOpen} onClose={()=>toggleDrawer(false)} variant={isSmallScreen?'temporary':'permanent'}
      sx={{        
        width: 240,        
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
    >      
      <NavListDrawer navLinks={navLinks}/>
    </Drawer>
  );
}

export default DrawerMenu;
