import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select, FormHelperText } from "@mui/material";

const RecursiveSelectMenu = ({ options, title, defaultOption = "", errorText = "Por favor escoja una opción" }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isError, setIsError] = useState(true); // Para manejar el estado de error

  // Maneja la selección de una opción
  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);

    // Actualiza el estado de error si se selecciona la opción predeterminada
    setIsError(value === "");
  };

  // Renderiza las opciones recursivamente
  const renderOptions = (options) => {
    return options.map((option, index) => (
      <MenuItem key={index} value={option.label}>
        {option.label}
        {option.subOptions && (
          <div style={{ marginLeft: "20px" }}>
            {renderOptions(option.subOptions)}
          </div>
        )}
      </MenuItem>
    ));
  };

  return (
    <FormControl fullWidth error={isError}>
      <InputLabel id="recursive-select-label">
        {title}
      </InputLabel>
      <Select
        labelId="recursive-select-label"
        value={selectedOption}
        onChange={handleChange}
        label={title}        
      >       
        {/* Renderiza las opciones dinámicamente */}
        {renderOptions(options)}
      </Select>
      {isError && <FormHelperText>{errorText}</FormHelperText>}
    </FormControl>
  );
};

export default RecursiveSelectMenu;
