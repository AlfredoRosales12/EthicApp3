import React, { useState } from 'react';
import { IconButton,Tabs, Tab, Box, Typography } from '@mui/material';
import ActivityDesigner from '../components/StageDesign';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import DeleteIcon from '@mui/icons-material/Delete';

const StagesMenu = () => {
    const [tabs, setTabs] = useState([
      { label: 'Etapa 1' },      
    ]);
    const [currentStep, setCurrentStep] = useState(0);

    const handleStepChange = (event, newStep) => {
      setCurrentStep(newStep);
    };

    const addNewTab = () => {
      const newTab = { label: `Etapa ${tabs.length + 1}` };
      setTabs([...tabs, newTab]);
      setCurrentStep(tabs.length); // Cambiar automáticamente a la nueva pestaña
    };

    const handleDeleteTab = (e, index) => {
      e.stopPropagation(); // Evita activar el cambio de pestaña al hacer clic en el botón
      const updatedTabs = tabs.filter((_, i) => i !== index);
      setTabs(updatedTabs);
      if (currentStep >= updatedTabs.length) {
        console.log("Tabs: "+tabs.length);
        setCurrentStep(tabs.length - 2);
      }
      
    };

  return (
    <Box sx={{ typography: 'body1', width:'100%'}}>
      {/* Barra de Etapas */}
      <Box sx={{display:'flex', maxWidth:'100%'}}>
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
          {tabs.map((tab, index) => (        
            <Tab key={index} label={            
              <Box sx={{ display: 'flex', alignItems: 'space-between', gap: 4 }}>
                {tab.label}
                <DeleteIcon
                  sx={{ fontSize: '15px', cursor: 'pointer' }}
                  onClick={(e) => handleDeleteTab(e, index)}
                />
              </Box>
            }/>         
          ))}
          
        </Tabs>
        <Box sx={{display:'flex', alignItems:'center', marginRight: 'auto', marginLeft:'5px'}}>
          <IconButton
          onClick={addNewTab}          
          >    
            <NoteAddIcon/>
          </IconButton>
        </Box>
      </Box>

      {/* Contenido de cada Etapa */}
      <Box sx={{ padding: 2 }}>
         {tabs[currentStep] ? (
          <ActivityDesigner/>
        ) : (
          <div>No hay contenido disponible</div>
        )}
      </Box>
    </Box>
  );
};


export default StagesMenu;