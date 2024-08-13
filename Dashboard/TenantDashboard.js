// src/components/TenantDashboard.js
import React from 'react';
import { useTable } from 'react-table';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './TenantDashboard.css'; // Import CSS file for styling

const TenantDashboard = ({ data = [
  { id: '1', name: 'John Doe', address: '123 Elm Street' },
  { id: '2', name: 'Jane Smith', address: '456 Oak Avenue' },
  { id: '3', name: 'Sam Johnson', address: '789 Pine Road' },
] }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const columns = React.useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'Name', accessor: 'name' },
      { Header: 'Address', accessor: 'address' },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: ({ row }) => (
          <button onClick={() => handleBookSlot(row.original.id)}>
            Book Slot
          </button>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data });

  const handleBookSlot = (id) => {
    // Show booking successful alert
    alert('Booking successful for ID: ' + id);

    // Redirect to the GridEmployee component with the ID as a parameter
    navigate(`/grid-employee/${id}`);
  };

  return (
    <table {...getTableProps()} className="tenant-dashboard-table">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} key={column.id}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={row.id}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()} key={cell.column.id}>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TenantDashboard;
