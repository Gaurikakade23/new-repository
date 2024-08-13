// src/components/ComplexDashboard.js
import React from 'react';
import { useTable } from 'react-table';
import './ComplexDashboard .css'; // Corrected CSS import
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ComplexDashboard = ({ data = [
    { levelID: '1', complexName: 'Complex A', levelNumber: '1', capacity: 100, availableSlot: 20, totalSlot: 120 },
    { levelID: '2', complexName: 'Complex B', levelNumber: '2', capacity: 150, availableSlot: 30, totalSlot: 180 },
    { levelID: '3', complexName: 'Complex C', levelNumber: '3', capacity: 200, availableSlot: 50, totalSlot: 250 },
] }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const columns = React.useMemo(
    () => [
      { Header: 'LevelID', accessor: 'levelID' },
      { Header: 'Complex Name', accessor: 'complexName' },
      { Header: 'LevelNumber', accessor: 'levelNumber' },
      { Header: 'Capacity', accessor: 'capacity' },
      { Header: 'Available Slot', accessor: 'availableSlot' },
      { Header: 'Total Slot', accessor: 'totalSlot' },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: ({ row }) => (
          <button onClick={() => handleViewSlots(row.original.levelID)}>
            View Slots
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

  // Corrected handleViewSlots function
  const handleViewSlots = (levelID) => {
    navigate(`/grid/${levelID}`); // Navigate to SlotGrid with levelID
  };

  return (
    <table {...getTableProps()} className="complex-dashboard-table">
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

export default ComplexDashboard;
