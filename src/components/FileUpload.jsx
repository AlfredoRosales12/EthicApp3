import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const FileUpload = () => {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : '');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px dashed #3f51b5',
        borderRadius: '8px',
        padding: '16px',
        width: '300px',
        textAlign: 'center',
        cursor: 'pointer',
        backgroundColor: '#f9f9f9',
        '&:hover': {
          backgroundColor: '#f0f0f0',
        },

        width:'100%',
      }}
      onClick={() => document.getElementById('file-input').click()} // Simula clic en el input oculto
    >
      <UploadFileIcon sx={{ fontSize: 40, color: '#3f51b5' }} />
      <Typography variant="body1" sx={{ marginTop: 1 }}>
        {fileName || 'Haz clic para adjuntar un archivo'}
      </Typography>
      <input
        type="file"
        id="file-input"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </Box>
  );
};

export default FileUpload;