import React, { useState } from 'react';
import { ToggleButtonGroup, ToggleButton, Box, Typography } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';

const SegmentedButton = ({onSegmentChange}) => {
  const [selected, setSelected] = useState('individual');

  const handleSelection = (event, newSelection) => {
    if (newSelection !== null) {
      setSelected(newSelection);
      if (onSegmentChange) onSegmentChange(newSelection);
    }
  };

  return (
    <Box sx={{display:'flex',alignItems:'center',gap:'5px'}}>
      <Typography variant="h7">
        Modo de Interacción:
      </Typography>
      <ToggleButtonGroup
        value={selected}
        exclusive
        onChange={handleSelection}
        sx={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          
        }}
      >
        <ToggleButton
          value="group"
          sx={{
            textTransform: 'none',
            '&.Mui-selected': { backgroundColor: 'primary.main', color: '#fff' },
          
          }}
        >
            <GroupsIcon/>
            Grupal
        </ToggleButton>
        <ToggleButton
          value="individual"
          sx={{
            textTransform: 'none',
            '&.Mui-selected': { backgroundColor: 'primary.main', color: '#fff' },
            
          }}
        >
          <PersonIcon/>
          Individual
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default SegmentedButton;