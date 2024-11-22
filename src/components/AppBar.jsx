import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuIcon from '@mui/icons-material/Menu';
import { DrawerContext } from './DrawerContext'; // Importa el contexto

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 128,
  },
}));



export default function ProminentAppBar({isSmallScreen}) {
  const { isDrawerOpen, toggleDrawer } = useContext(DrawerContext); // Usa el contexto
  return (   
      <AppBar position="static">
        <StyledToolbar>
        {isSmallScreen ? (
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={()=>toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          ):(
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >            
              <ArrowBackIcon />
            </IconButton>)
        }
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
          >
            Crear Diseño de Actividad
          </Typography>          
        </StyledToolbar>
      </AppBar>
   
  );
}