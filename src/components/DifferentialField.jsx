
import React, { useState } from "react";
import { Typography, Box, TextField, RadioGroup, FormControlLabel, Radio } from "@mui/material";

const DifferentialField = ({ value, onChange }) => {
    return (
        <div>
            {/* Campo para ingresar la escala */}
            <div style={{ marginBottom: "1rem" }}>
                <Typography>Escala:</Typography>
                <TextField
                    type="number"
                    fullWidth
                    value={value.scale || ""}
                    onChange={(e) => onChange({ ...value, scale: e.target.value })}
                    onWheel={(e) => e.target.blur()} // Evita cambios con el scroll del TextField de Escala
                    placeholder="Introduce la escala (cantidad de opciones)"
                />
            </div>

            {/* Vista dinámica para los botones de radio */}
            {value.scale > 0 && (
                <div>
                    <Typography>Escala de respuestas de diferencial semántico:</Typography>
                    <Box sx={{display:'flex', justifyContent:'space-between', margin:'20px 0px' }}>
                        <TextField/>
                        <RadioGroup row>
                            {[...Array(parseInt(value.scale, 10))].map((_, index) => (
                                <FormControlLabel
                                    key={index}
                                    value={index + 1}
                                    control={<Radio />}
                                    label={`${index + 1}`}
                                />
                            ))}
                        </RadioGroup>
                        <TextField/>
                    </Box>
                    
                </div>
            )}
        </div>
    );
};

// Ejemplo de uso
const App = () => {
    const [value, setValue] = useState({ scale: 0 }); // Estado inicial

    return (
        <Box p={2}>
            <Typography variant="h4">Formulario de Diferencial Semántico</Typography>
            <DifferentialField value={value} onChange={setValue} />
            {/* Campo para el largo mínimo de comentario */}
            <div style={{ marginBottom: "1rem" }}>
                <Typography>Largo Mínimo de Comentario (Opcional):</Typography>
                <TextField
                    type="number"
                    fullWidth
                    value={value.minCommentLength || ""}
                    onChange={(e) => onChange({ ...value, minCommentLength: e.target.value })}
                    placeholder="Introduce el largo mínimo de comentario"
                />
            </div>
        </Box>
    );
};

export default App;

