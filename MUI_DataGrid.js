import * as React from 'react';
import { DataGrid, GridToolbar, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    '& .MuiDataGrid-columnsContainer': {
      backgroundColor: '#fafafa',
    },
    '& .MuiDataGrid-iconSeparator': {
      display: 'none',
    },
    '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
      borderRight: '1px solid #f0f0f0',
    },
    '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
      borderBottom: '1px solid #f0f0f0',
    },
  },
});

function CustomToolbar() {
  return (
    <GridToolbar>
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbar>
  );
}

export default function DataTable({ columns, rows }) {
  const classes = useStyles();
  const [pageSize, setPageSize] = React.useState(5);
  const { data, loading } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  });

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        className={classes.root}
        components={{
          Toolbar: CustomToolbar,
        }}
        rows={rows || data.rows}
        columns={columns || data.columns}
        pagination
        pageSize={pageSize}
        rowsPerPageOptions={[5, 10, 20]}
        sortingOrder={['desc', 'asc']}
        disableColumnFilter={false}
        disableColumnSelector={false}
        disableSelectionOnClick={false}
        checkboxSelection={false}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        loading={loading}
        {...data}
      />
    </div>
  );
}
