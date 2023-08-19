import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Person } from '../../../Interfaces/Person'; // Import the previously created interface

interface MultiDataGridProps {
    data: Person[]; // Pass the array of data to the component
}

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'title', headerName: 'Title', width: 500 },
    { field: 'userId', headerName: 'UserID', width: 100 },
    { field: 'body', headerName: 'Body', width: 600 },
];

const MultiDataGrid: React.FC<MultiDataGridProps> = ({ data }) => {
    console.log(data)
    return (
        <div style={{ height: '80vh', width: '100%' }}>
            <DataGrid rows={data} columns={columns} />
        </div>
    );
};

export default MultiDataGrid;
