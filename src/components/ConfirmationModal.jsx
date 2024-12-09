import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

function ConfirmationModal({ open, onClose, onConfirm, message = "¿Estás seguro de que deseas continuar?" }) {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-title" aria-describedby="modal-description">
      <Box sx={modalStyle}>
        <Typography id="modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
          Confirmación
        </Typography>
        <Typography id="modal-description" sx={{ mb: 3 }}>
          {message}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Button variant="outlined" color="primary" onClick={onClose}>
            Cancelar
          </Button>
          <Button variant="contained" color="error" onClick={onConfirm}>
            Confirmar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default ConfirmationModal;
