// src/components/DrawerMenu.js
import React, { useContext } from 'react';
import {Drawer,useMediaQuery} from '@mui/material';
import NavListDrawer from './NavListDrawer';
import HomeIcon from '@mui/icons-material/Home';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DrawIcon from '@mui/icons-material/Draw';
import { DrawerContext } from './DrawerContext'; // Importa el contexto
import BottomDrawer from './BottomDrawer'

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
        flexShrink: 0,        
        '& .MuiDrawer-paper': {  
          width: 240,     
          boxSizing: 'border-box',          
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Sombra sutil          
          display:'flex',
          flexDirection:'column',
          justifyContent:'space-between',
          overflow: 'hidden', // Evita barras de desplazamiento innecesarias
        },
      }}
    >      
      <NavListDrawer navLinks={navLinks}/>
      <BottomDrawer/>
    </Drawer>
  );
}

export default DrawerMenu;
