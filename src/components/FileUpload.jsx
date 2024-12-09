import React, { useState } from 'react';
import { Box, Typography, Paper, Alert } from '@mui/material';
import { UploadFile as UploadFileIcon, Close as CloseIcon } from '@mui/icons-material';
import theme from '../components/theme'; // Importar el tema personalizado

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);

      // Si es una imagen, generar una URL para previsualización
      if (selectedFile.type.startsWith('image/')) {
        const fileUrl = URL.createObjectURL(selectedFile);
        setPreviewUrl(fileUrl);
      } else {
        setPreviewUrl(null);
      }
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setPreviewUrl(null);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        p: 3,
        border: !file ? ('2px dashed #2649EC'):('2px #2649EC'),
        borderRadius: 2,
        backgroundColor: theme.palette.primary.gradient,
        textAlign: 'center',
        Width: '100%',        
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: '#e3f2fd',
        },
      }}
      onClick={() => document.getElementById('fileInput').click()}
    >
      <input
        type="file"
        id="fileInput"
        hidden
        onChange={handleFileChange}
      />
      {!file ? (
        <>
          <UploadFileIcon color="primary" sx={{ fontSize: 48 }} />
          <Typography variant="h6" color="textSecondary">
            Haz clic aquí para subir un archivo
          </Typography>
        </>
      ) : (
        <>
          <Alert severity="success" sx={{ width: '100%' }}>
            Archivo subido correctamente
          </Alert>
          <Paper
            elevation={3}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p: 2,
              borderRadius: 1,
              width: '100%',
              textAlign: 'center',
            }}
          >
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Vista previa"
                style={{
                  maxWidth: '100%',
                  maxHeight: 200,
                  marginBottom: 10,
                  borderRadius: 8,
                }}
              />
            ) : (
              <Typography variant="body1" noWrap>
                {file.name}
              </Typography>
            )}
            <Typography variant="caption" color="textSecondary">
              Tamaño: {(file.size / 1024).toFixed(2)} KB
            </Typography>
          </Paper>
          <CloseIcon
            color="error"
            sx={{ alignSelf: 'flex-end', cursor: 'pointer', mt: 2 }}
            onClick={handleRemoveFile}
          />
        </>
      )}
    </Box>
  );
};

export default FileUploader;