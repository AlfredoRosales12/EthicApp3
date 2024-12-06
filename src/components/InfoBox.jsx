import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

function InfoBox({ message }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection:'column',
        alignItems: "center",
        gap: 2,
        p: 2,
        borderRadius: 2,
        border: "1px solid #2649EC",
        bgcolor: "#F4F8FF",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        height:'100%',
        width:'10%'
      }}
    >
      <IconButton
        sx={{
          bgcolor: "#2649EC",
          color: "#ffffff",
          "&:hover": { bgcolor: "#1E3DBB" },
          width: 40,
          height: 40,
        }}
      >
        <InfoIcon />
      </IconButton>
      <Typography
        sx={{ color: "#2649EC", fontSize: "1rem", fontWeight: "500" }}
      >
        {message}
      </Typography>
    </Box>
  );
}

export default InfoBox;
