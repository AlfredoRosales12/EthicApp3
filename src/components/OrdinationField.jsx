// Archivo: ButtonsPanel.jsx

import React, { useState } from 'react';
import {
  Button,
  TextField,
  IconButton,
  Box,
  Typography,
  Switch,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ButtonsPanel = () => {
  const [roles, setRoles] = useState([]);

  const handleAddRole = () => {
    setRoles([...roles, { role: '', position: false, justifyRole: false, number: '' }]);
  };

  const handleRoleChange = (index, field, value) => {
    const updatedRoles = [...roles];
    updatedRoles[index][field] = value;
    setRoles(updatedRoles);
  };

  const handleDeleteRole = (index) => {
    const updatedRoles = roles.filter((_, i) => i !== index);
    setRoles(updatedRoles);
  };

  const handleJustifyAllRoles = () => {
    const updatedRoles = roles.map((role) => ({
      ...role,
      justifyRole: true,
    }));
    setRoles(updatedRoles);
  };

  const handleJustifyAllPositions = () => {
    const updatedPositions = roles.map((position) => ({
      ...position,
      position: true,
    }));
    setRoles(updatedPositions);
  };

  return (
    <Box sx={{ p: 2 }}>
      {/* Botones principales */}
      <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap' }}>
        <Button variant="contained" onClick={handleJustifyAllRoles}>
          Justificar todos los roles
        </Button>
        <Button variant="contained" onClick={handleJustifyAllPositions}>
          Justificar todas las posiciones
        </Button>
        <Button variant="outlined" onClick={handleAddRole}>
          Agregar Rol
        </Button>
      </Box>

      {/* Lista de roles */}
      {roles.map((role, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            mb: 1,
            flexWrap: 'wrap',
          }}
        >
          {/* Campo de texto para el rol */}
          <TextField
            label="Rol"
           
            value={role.role}
            onChange={(e) => handleRoleChange(index, 'role', e.target.value)}
            sx={{ flex: '1 1 200px' }}
          />

          {/* Interruptor para justificar rol */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ mr: 1 }}>Justificar Rol</Typography>
            <Switch
              checked={role.justifyRole}
              onChange={(e) =>
                handleRoleChange(index, 'justifyRole', e.target.checked)
              }
            />
          </Box>

          {/* Interruptor para justificar posición */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ mr: 1 }}>Justificar Posición</Typography>
            <Switch
              checked={role.position}
              onChange={(e) =>
                handleRoleChange(index, 'position', e.target.checked)
              }
            />
          </Box>

          {/* Campo numérico */}
          <TextField
            label="Número"
            type="number"
            value={role.number}
            onChange={(e) => handleRoleChange(index, 'number', e.target.value)}
            sx={{ flex: '0 1 100px' }}
          />

          {/* Botón de eliminación */}
          <IconButton onClick={() => handleDeleteRole(index)} color="error">
            <DeleteIcon />
          </IconButton>
        </Box>
      ))}
    </Box>
  );
};

export default ButtonsPanel;
