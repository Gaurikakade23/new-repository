import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SlotGrid.css'; // Import CSS file for styling

const SlotGrid = () => {
  const { levelID } = useParams(); // Retrieve levelID from URL
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    // Fetch available slots based on levelID
    // Here we use static data for demonstration purposes
    const fetchedSlots = [
      { id: 1, slotName: 'Slot 1', status: 'available' },
      { id: 2, slotName: 'Slot 2', status: 'booked' },
      { id: 3, slotName: 'Slot 3', status: 'available' },
      { id: 4, slotName: 'Slot 4', status: 'booked' },
      { id: 5, slotName: 'Slot 5', status: 'available' }
    ];
    setSlots(fetchedSlots);
  }, [levelID]);

  return (
    <div className="slot-grid">
      <h1>Available Slots for Level ID: {levelID}</h1>
      <div className="grid-container">
        {slots.map(slot => (
          <div
            key={slot.id}
            className={`slot-card ${slot.status}`} // Add class based on slot status
          >
            <h2>{slot.slotName}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlotGrid;
