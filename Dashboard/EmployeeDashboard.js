// src/components/EmployeeDashboard.js
import React from 'react';
import { useTable } from 'react-table';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import './EmployeeDashboard.css'; // Import CSS file for styling

const EmployeeDashboard = ({ data = [
  { complexID: '1', name: 'Alice Johnson', address: '123 Maple Street' },
  { complexID: '2', name: 'Bob Smith', address: '456 Oak Avenue' },
  { complexID: '3', name: 'Carol White', address: '789 Pine Road' },
] }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const columns = React.useMemo(
    () => [
      { Header: 'ComplexID', accessor: 'complexID' },
      { Header: 'Name', accessor: 'name' },
      { Header: 'Address', accessor: 'address' },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: ({ row }) => (
          <button className="book-slot-btn" onClick={() => handleBookSlot(row.original.complexID)}>
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

  const handleBookSlot = (complexID) => {
    // Show alert with the selected ComplexID
    alert(`Book slot for ComplexID: ${complexID}`);

    // Redirect to the GridEmployee component with the ComplexID as a parameter
    navigate(`/grid-employee/${complexID}`);
  };

  return (
    <table {...getTableProps()} className="employee-dashboard-table">
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

export default EmployeeDashboard;
