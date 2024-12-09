import React, { useState } from 'react';
import { IconButton, Popover, Typography } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';

export default function HelpPopover() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const open = Boolean(anchorEl);

  return (
    <>    
      <IconButton onClick={handleClick}>
        <HelpIcon/>
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>
          <strong>Ordenación:</strong> Clasifica elementos según criterios.<br />
          <strong>Diferencial Semántico:</strong> Evalúa percepciones con adjetivos y una escala.<br />
          <strong>Otro tipo:</strong> Otra descripción breve.<br />
        </Typography>
      </Popover>
    </>
  );
}
