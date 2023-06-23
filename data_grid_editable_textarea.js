import React, { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'description',
    headerName: 'Description',
    flex: 1,
    renderCell: (params) => {
      const [editing, setEditing] = useState(false);
      const [value, setValue] = useState(params.value);

      const handleInputChange = (event) => {
        setValue(event.target.value);
      };

      const handleEditClick = () => {
        setEditing(true);
      };

      const handleSaveClick = () => {
        // Save the updated value
        console.log(`Row ID: ${params.row.id}, Value: ${value}`);
        setEditing(false);
      };

      return (
        <div>
          {editing ? (
            <textarea value={value} onChange={handleInputChange} rows={3} />
          ) : (
            <div>{params.value}</div>
          )}
          {editing ? (
            <IconButton color="primary" onClick={handleSaveClick}>
              <SaveIcon />
            </IconButton>
          ) : (
            <IconButton onClick={handleEditClick}>
              <EditIcon />
            </IconButton>
          )}
        </div>
      );
    },
  },
];

// Rows and DataTable component remain the same

export default DataTable;
