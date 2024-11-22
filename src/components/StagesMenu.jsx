import React, { useState } from 'react';
import { Button,Tabs, Tab, Box, Typography } from '@mui/material';

const StagesMenu = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepChange = (event, newStep) => {
    setCurrentStep(newStep);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      {/* Barra de Etapas */}
      <Tabs
        value={currentStep}
        onChange={handleStepChange}
        variant="scrollable"
        scrollButtons="auto"
        indicatorColor="primary"
        textColor="primary"
        aria-label="Menu de Etapas"
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Tab label="Etapa 1" />
        <Tab label="Etapa 2" />
        <Tab label="Etapa 3" />
        <Tab label="Etapa 4" />          
        
      </Tabs>

      {/* Contenido de cada Etapa */}
      <Box sx={{ padding: 2 }}>
        {currentStep === 0 && <Typography>Contenido de la Etapa 1</Typography>}
        {currentStep === 1 && <Typography>Contenido de la Etapa 2</Typography>}
        {currentStep === 2 && <Typography>Contenido de la Etapa 3</Typography>}
        {currentStep === 3 && <Typography>Contenido de la Etapa 4</Typography>}
      </Box>
    </Box>
  );
};

export default StagesMenu;