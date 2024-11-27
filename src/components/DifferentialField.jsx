import React from "react";
import { Typography, TextField,RadioGroup, FormControlLabel, Radio } from "@mui/material";

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
                    placeholder="Introduce la escala (cantidad de opciones)"
                />
            </div>

            {/* Vista dinámica para los botones de radio */}
            {value.scale > 0 && (
                <div style={{ marginBottom: "1rem" }}>
                <Typography>Opciones de la Escala:</Typography>
                <RadioGroup
                    row
                    value={value.selectedOption || ""}
                    onChange={(e) => onChange({ ...value, selectedOption: e.target.value })}
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    {[...Array(Number(value.scale))].map((_, index) => (
                        <div
                            key={index}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                margin: "0 10px",
                            }}
                        >
                            <Radio value={`${index + 1}`} />
                            <Typography>{`${index + 1}`}</Typography>
                        </div>
                    ))}
                </RadioGroup>
            </div>
            )}

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
        </div>
    );
};

export default DifferentialField;
