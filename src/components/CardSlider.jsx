import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

// Styled component for modern card appearance
const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '16px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
  },
}));

const cardData = [
  {
    title: 'Actividad 1',
    description: 'Descripción de la actividad 1.',
    releaseDate: '2024-12-01',
    code: 'ACT-001',
  },
  {
    title: 'Actividad 2',
    description: 'Descripción de la actividad 2.',
    releaseDate: '2024-12-15',
    code: 'ACT-002',
  },
  {
    title: 'Actividad 3',
    description: 'Descripción de la actividad 3.',
    releaseDate: '2025-01-10',
    code: 'ACT-003',
  },
  {
    title: 'Actividad 4',
    description: 'Descripción de la actividad 3.',
    releaseDate: '2025-01-10',
    code: 'ACT-003',
  },
];

function CardSlider() {
  return (
    <Box sx={{
      display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr', // Define dos columnas iguales
        gap: 1, // Espacio entre los botones
        padding: '0px',
        height:{ xs: "50px", sm: "200px", md: "300px" },
    }}>
      {cardData.map((card, index) => (
        <StyledCard key={index} sx={{ minWidth: 280, height:180}}>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {card.description}
            </Typography>
            <Typography variant="caption" display="block" color="text.secondary">
              Fecha de lanzamiento: {card.releaseDate}
            </Typography>
            <Typography variant="caption" display="block" color="text.secondary">
              Código: {card.code}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Ver más</Button>
          </CardActions>
        </StyledCard>
      ))}
    </Box>
  );
}

export default CardSlider;
