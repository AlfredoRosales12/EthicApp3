// src/components/ActivityTable.jsx
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TablePagination,
} from "@mui/material";

function ActivityTable({
  activities,
  filter,
  onSelectActivity,
  selectedActivity,
  onModifyActivity,
  rowsPerPage,
  page,
  onChangePage,
  onChangeRowsPerPage,
}) {
  const filteredActivities = activities.filter(
    (activity) =>
      activity.name.toLowerCase().includes(filter.toLowerCase()) ||
      activity.date.includes(filter)
  );

  return (
    <TableContainer
      component={Paper}
      sx={{
        width: "100%",
        maxWidth: 800,
        borderRadius: 3,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre de la Actividad</TableCell>
            <TableCell>Fecha de Creación</TableCell>
            <TableCell align="center">Acción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredActivities
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((activity, index) => (
              <TableRow
                key={index}
                hover
                onClick={() => onSelectActivity(activity)}
                selected={selectedActivity?.name === activity.name}
                sx={{
                  cursor: "pointer",
                  "&.Mui-selected": {
                    bgcolor: "#E3EBFF",
                  },
                }}
              >
                <TableCell>{activity.name}</TableCell>
                <TableCell>{activity.date}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="outlined"
                    sx={{ color: "#2649EC", borderColor: "#2649EC" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onModifyActivity(activity);
                    }}
                  >
                    Modificar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={filteredActivities.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={onChangePage}
        onRowsPerPageChange={onChangeRowsPerPage}
      />
    </TableContainer>
  );
}

export default ActivityTable;
