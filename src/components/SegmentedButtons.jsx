import React, { useState } from 'react';
import { ToggleButtonGroup, ToggleButton, Box, Typography } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';

const SegmentedButton = () => {
  const [selected, setSelected] = useState('roles');

  const handleSelection = (event, newSelection) => {
    if (newSelection !== null) {
      setSelected(newSelection);
    }
  };

  return (
    <Box sx={{display:'flex',alignItems:'center',gap:'15px' }}>
      <Typography variant="h7" sx={{ }}>
        Tipo de Actividad:
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
          value="roles"
          sx={{
            textTransform: 'none',
            '&.Mui-selected': { backgroundColor: 'primary.main', color: '#fff' },
          }}
        >
            <GroupsIcon/>
            Grupal
        </ToggleButton>
        <ToggleButton
          value="posiciones"
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