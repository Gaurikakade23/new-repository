import React from 'react';
import { useTable } from 'react-table';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './CompanyDashboard.css';
import '../Dashboard/Grid';

const CompanyDashboard = ({ data = [
  { levelID: '1', levelName: 'Level 1', totalSlots: 100, availableSlots: 25 },
  { levelID: '2', levelName: 'Level 2', totalSlots: 150, availableSlots: 50 },
  { levelID: '3', levelName: 'Level 3', totalSlots: 200, availableSlots: 75 },
] }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const columns = React.useMemo(
    () => [
      { Header: 'Level ID', accessor: 'levelID' },
      { Header: 'Level Name', accessor: 'levelName' },
      { Header: 'Total Slots', accessor: 'totalSlots' },
      { Header: 'Available Slots', accessor: 'availableSlots' },
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

  const handleViewSlots = (levelID) => {
    navigate(`/grid/${levelID}`); // Navigate to SlotGrid with levelID
  };

  return (
    <table {...getTableProps()} className="dashboard-table">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} key={column.id}>{column.render('Header')}</th>
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
                <td {...cell.getCellProps()} key={cell.column.id}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CompanyDashboard;
