import React from 'react';
import Button from '@mui/material/Button';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ShareIcon from '@mui/icons-material/Share';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import BrushIcon from '@mui/icons-material/Brush';

const buttonList = [
  { text: 'Diseñar una Actividad', color: 'linear-gradient(45deg, #1A3578, #2649EC, #FFC933)', icon: <BrushIcon sx={{ fontSize: '3rem' }} /> },
  { text: 'Lanzar una Actividad', color: 'linear-gradient(45deg, #1A3578, #2649EC, #FFC933)', icon: <RocketLaunchIcon sx={{ fontSize: '3rem' }} /> },
  { text: 'Compartir un Diseño de Actividad', color: 'linear-gradient(45deg, #1A3578, #2649EC, #FFC933)', icon: <ShareIcon sx={{ fontSize: '3rem' }} /> },
  { text: 'Buscar Diseños Compartidos', color: 'linear-gradient(45deg, #1A3578, #2649EC, #FFC933)', icon: <ContentPasteSearchIcon sx={{ fontSize: '3rem' }} /> },
];
{/*linear-gradient(45deg, #1A3578, #2649EC)*/}
export default function StylishButtons() {
  return (
    <div style={{ display: 'grid',
      gridTemplateColumns: '1fr 1fr', // Define dos columnas iguales
      gap: 30, // Espacio entre los botones
      margin: '25px 0px',
      height:{ xs: "50px", sm: "200px", md: "300px" },}}>
      {buttonList.map((button, index) => (
        <Button
          key={index}
          sx={{
            background: button.color,
            color: '#fff',
            padding: '12px 20px',
            fontSize: '20px',
            fontWeight: 'bold',
            textTransform: 'none',
            borderRadius: '30px',
            boxShadow: '0px 6px 0px rgba(0, 0, 0, 0.2)',
            whiteSpace: 'pre-wrap', // Permite saltos de línea en el texto
            display: 'flex',
            justifyContent: 'space-between', // Alinea el icono a la derecha
            alignItems: 'center', // Centra el texto y el icono verticalmente
            width: '100%', // Hace que el botón ocupe todo el ancho disponible
            height: '100px', // Se adapta a la altura del contenido
            '&:hover': {
              transform: 'translateY(2px)',
              boxShadow: '0px 4px 0px rgba(0, 0, 0, 0.2)',
            },
            '&:active': {
              transform: 'translateY(6px)',
              boxShadow: 'none',
            },
          }}
          
        >          
          {button.text}
          {button.icon}
        </Button>
      ))}
    </div>
  );
}
