import React, { useState } from 'react';
import { IconButton,Tabs, Tab, Box, Typography } from '@mui/material';
import ActivityDesigner from '../components/StageDesign';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmationModal from './ConfirmationModal';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const StagesMenu = () => {

  const [currentStep, setCurrentStep] = useState(0);


  const [tabs, setTabs] = useState([
    {
      index: 1, 
      label: 'Etapa 1',        
    },      
  ]); 

  const handleStepChange = (event, newStep) => {
    setCurrentStep(newStep);
  };    
  
  //Agrega Nueva Etapa
  const addNewTab = () => {   
    const aux=tabs.length-1;
    let indexNew=0;    
    if(aux>=0){
      indexNew=tabs[tabs.length-1].index+1;    
      
    }else{
      indexNew=1;  
    }  
    const newTab = {index:indexNew,  label: `Etapa ${indexNew}` };
      setTabs([...tabs, newTab]);
      setCurrentStep(tabs.length); // Cambiar automáticamente a la nueva pestaña
  };   
  
  const [selectedIndex, setSelectedIndex] = useState(null); // Índice del elemento a eliminar
  const [isModalOpen, setModalOpen] = useState(false);

  // Abre el modal y guarda el índice del elemento seleccionado
  const handleOpenModal = (index) => {
    setSelectedIndex(index);
    setModalOpen(true);
  };

  // Cierra el modal
  const handleCloseModal = () => {
    setSelectedIndex(null);
    setModalOpen(false);
  };

  // Elimina el elemento seleccionado
  const handleDelete = () => {   
    const updatedTabs = tabs.filter((_, i) => i !== selectedIndex);
      setTabs(updatedTabs);
      if (currentStep >= updatedTabs.length) {        
        setCurrentStep(tabs.length - 2);
      }else{
        setCurrentStep(0);
      }
      handleCloseModal();
  };

  return (
    <Box sx={{ typography: 'body1', width:'100%'}}>
      <div>
      <ConfirmationModal
        open={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleDelete}
        message={`¿Estás seguro de que deseas eliminar la "${selectedIndex!=null?(tabs[selectedIndex].label):""}"?`}
      />
    </div>
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
                  sx={{ fontSize: '15px', cursor: 'pointer', color:'#E10000' }}
                  onClick={
                    (e) => {
                      e.stopPropagation(); // Evita cambiar de pestaña al hacer clic en el botón
                      handleOpenModal(index);
                  }}
                />
              </Box>
            }/>         
          ))}
          
        </Tabs>
        <Box sx={{display:'flex', alignItems:'center', marginRight: 'auto', marginLeft:'5px'}}>
          <IconButton
          onClick={addNewTab}          
          >    
            <AddCircleOutlineIcon/>
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