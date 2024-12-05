import React, { useState} from "react";
import {
    Box,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    TextField,
    Button,
    MenuItem,
    Select,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import 'react-quill-new/dist/quill.snow.css'; // Estilo base de Quill
import ReactQuill from "react-quill-new";
import DifferentialField from "./DifferentialField";
import OrdinationField from "./OrdinationField";
import Segmented from "./SegmentedButtons"
import DropdownMenu from "./DropdownMenu";

const QuestionCanvas = () => {

    const [expanded, setExpanded] = useState(false); // Estado para controlar el acordeón

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false); // Cambiar el estado
    };

    const toggleAccordion = (index) => {
        const panelId = questions[index]?.id;
        setExpanded((prevExpanded) => (prevExpanded === panelId ? false : panelId));
      };

    const [savedQuestions, setSavedQuestions] = useState([]);

    const handleSaveQuestion = (index) => {
      setSavedQuestions((prev) => {
        const updated = [...prev];
        updated[index] = true;
        toggleAccordion(index);
        return updated;
      });


    };

    // Lista de preguntas
    const [questions, setQuestions] = useState([]); 
    const isQuestionSaved = (index) => savedQuestions[index] === true;

    // Agregar nueva pregunta
    const handleAddQuestion = () => {
        setQuestions((prevQuestions) => [
            ...prevQuestions,
            { text: "", type: "Texto" }, // Nueva pregunta con tipo por defecto "Texto"
        ]);
    };

    // Editar pregunta directamente en el lienzo
    const handleEditQuestion = (index, key, value) => {
        setQuestions((prevQuestions) => {
            const updatedQuestions = [...prevQuestions];
            updatedQuestions[index][key] = value;
            return updatedQuestions;
        });
    };

    // Eliminar una pregunta
    const handleDeleteQuestion = (index) => {
        setQuestions((prevQuestions) => prevQuestions.filter((_, i) => i !== index));
    };

    //Estado para controlar el botón individual o grupal
    const [selectedSegment, setSelectedSegment] = useState(null);

    const handleSegmentChange = (segment) => {
      setSelectedSegment(segment);
    };


    // Renderizar campo dinámico basado en el tipo de pregunta
    const renderDynamicField = (type, value, onChange) => {
        switch (type) {
            case "Texto":
                return (
                    <h6>Texto</h6>
                );
            case "Diferencial":
                return (
                    <DifferentialField value={value}/>
                );
            case "Ordenacion":
                return (
                    <OrdinationField/>
                );
            default:
                return null;
        }
    };

    const menuTypeAgrupation = [
        { label: "Aleatorio" },        
        { label: "Performance Homogéneo" },
        { label: "Perfromance Heterogéneo" },       
        { label: "Tipo de Conocimiento Homogéneo" },
        { label: "Tipo de Conocimiento Heterogéneo" },
        { label: "Usar anterior" }
      ];
    
      

    return (
        <>
            <Box sx={{display:'flex',justifyContent: 'space-between', alignItems:'center', width:'100%', margin:'10px 0px', height:'auto' }}>            
                <Button variant="contained" onClick={handleAddQuestion} sx={{height:'50px'}}>
                    Nueva Pregunta
                </Button>
                <Segmented onSegmentChange={handleSegmentChange}/>
                <Box sx={{
                    display: selectedSegment === "group" ? "flex" : "none", 
                    flexDirection:'column',
                    gap:2
                }}>
                    <DropdownMenu options={menuTypeAgrupation} title={"Método de Agrupación"} />
                    <Box sx={{display:'flex', alignItems:'center',gap:'4px'}}>
                        Número de estudiantes por grupo:                       
                        <TextField
                            type="number"                   
                            placeholder="2"
                        />
                    </Box>
                </Box>
                
            </Box>
            {/* Lienzo de preguntas */}
            <div
                style={{
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    padding: "20px",
                    minHeight: "400px",
                    backgroundColor: "#f9f9f9",
                    overflowY: "auto",
                    maxHeight: "500px",                    
                }}
            >
                {questions.length === 0 ? (
                    <Typography color="text Secondary" align="center">
                        No hay preguntas agregadas aún.
                    </Typography>
                ) : 
                (
                    <div>
                    {questions.map((question, index) => (
                        <Accordion 
                            key={index} 
                            style={{ 
                                    marginBottom: "1rem", 
                                    MaxWidth:"100%",
                                    border: `2px solid ${isQuestionSaved(index) ? "green" : "red"}`,
                                }}
                            onChange={handleChange(index)} // Maneja cambios individuales
                            expanded={expanded===index}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`panel${index}-content`}
                                id={`panel${index}-header`}
                                sx={{display:'flex', justifyContent:'space-between'}}
                            >
                               
                                <Typography>{`${index + 1}.- ` }</Typography>
                                <div dangerouslySetInnerHTML={{ __html: questions[index]?.text || "Pregunta Vacía" }} />                                
                                <Typography
                                    style={{
                                        marginLeft: "auto",
                                        color: isQuestionSaved(index) ? "green" : "red",
                                    }}
                                >
                                    {isQuestionSaved(index) ? "Guardado" : "No Guardado"}
                                </Typography>
                           
                            </AccordionSummary>
                            <AccordionDetails>
                                
                                <ReactQuill
                                    theme="snow"                                 
                                    placeholder="Formula tu pregunta aquí..."
                                    value={questions[index]?.text || ""}
                                    onChange={(value) => handleEditQuestion(index, "text", value)}
                                    style={{height:'200px' }}                                    
                                />
                                
                                <div style={{ marginTop: "75px", marginBottom:"30px" }}>
                                    <Typography>Tipo de Respuesta:</Typography>
                                    <Select                                    
                                        value={question.type}
                                        onChange={(e) => handleEditQuestion(index, "type", e.target.value)}
                                    >                                       
                                        <MenuItem value="Diferencial">Diferencial Semántico</MenuItem>
                                        <MenuItem value="Ordenacion">Ordenación</MenuItem>
                                        <MenuItem value="Texto">Texto</MenuItem>
                                    </Select>
                                </div>

                                <div style={{ marginBottom: "1rem" }}>
                                    
                                    {renderDynamicField(
                                        question.type,
                                        question.text,
                                        (value) => handleEditQuestion(index, "text", value)
                                    )}
                                </div>
                                <Button
                                    variant="outlined"
                                    color="success"
                                    onClick={() => handleSaveQuestion(index)}
                                    style={{ marginRight: "10px" }}
                                >
                                    Guardar
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="error"
                                    onClick={() => handleDeleteQuestion(index)}
                                >
                                    Eliminar Pregunta
                                </Button>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                    </div>
                )}    
            </div>
        </>
    );
};

export default QuestionCanvas;
