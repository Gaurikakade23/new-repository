import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './GridEmployee.css'; // Import the CSS file for styling

const Grid = () => {
  const [totalSlots, setTotalSlots] = useState(58); // Total number of slots
  const [slots, setSlots] = useState(generateSlots(totalSlots)); // Initial slots state
  const navigate = useNavigate(); // Initialize useNavigate

  const columns = 5; // Fixed number of columns

  // Function to generate initial slots
  function generateSlots(numSlots) {
    return Array.from({ length: numSlots }, (_, index) => ({
      id: index,
      status: 'Available',
    }));
  }

  // Handle booking a slot and redirect
  const handleBook = (id) => {
    setSlots(slots.map(slot =>
      slot.id === id ? { ...slot, status: 'Occupied' } : slot
    ));
    navigate(`/slot-grid/${id}`); // Redirect to SlotGrid component with the slot ID
  };

  // Calculate number of rows based on total slots and columns
  const rows = Math.ceil(totalSlots / columns);

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSlots(generateSlots(totalSlots)); // Reset slots
        }}
      >
        <label>
          Total Slots:
          <input
            type="number"
            value={totalSlots}
            onChange={(e) => setTotalSlots(parseInt(e.target.value, 10))}
            min="1"
          />
        </label>
        <button type="submit">Update Grid</button>
      </form>

      <div
        className="grid-container"
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }} // Corrected syntax
      >
        {slots.map(slot => (
          <div key={slot.id} className={`grid-item ${slot.status.toLowerCase()}`}>
            <div className="slot-number">{slot.id + 1}</div> {/* Show slot number */}
            <div className="slot-status">{slot.status}</div>
            {slot.status === 'Available' && (
              <button onClick={() => handleBook(slot.id)} className="book-button">
                Book
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
