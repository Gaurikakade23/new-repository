import React from 'react';
import { useLocation } from 'react-router-dom';
import './EmployeeConfirmation.css';

function EmployeeConfirmation() {
  const location = useLocation();
  const { employeeName, slotNo } = location.state || {};

  return (
    <div className="employee-confirmation">
      <h1>Booking Confirmation</h1>
      <p>Employee Name: {employeeName}</p>
      <p>Booked Slot Number: {slotNo}</p>
    </div>
  );
}

export default EmployeeConfirmation;