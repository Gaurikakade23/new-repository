// src/components/BookingDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import './BookingDetails.css'; 

const BookingDetails = () => {
  const { slotId } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate
  const [bookingDetails, setBookingDetails] = useState({
    startTime: '',
    endTime: '',
    vehiclePlateNo: '',
    vehicleType: '',
    contactNo: '',
    levelNo: '',
    username: ''
  });

  // Fetch slot and level info if needed (e.g., from an API)
  useEffect(() => {
    // Example fetching logic; replace with your actual data fetching if needed
    // setBookingDetails(prevState => ({
    //   ...prevState,
    //   levelNo: '1' // Example static level number
    // }));
  }, []);

  const handleChange = (e) => {
    setBookingDetails({
      ...bookingDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission logic here

    console.log('Booking Details:', bookingDetails);
    alert('Booking successfully completed');

    // Clear the form fields
    setBookingDetails({
      startTime: '',
      endTime: '',
      vehiclePlateNo: '',
      vehicleType: '',
      contactNo: '',
      levelNo: '',
      username: ''
    });

    // Navigate to Grid component
    navigate('/grid'); // Ensure '/grid' is the correct route path
  };

  return (
    <div className="booking-details">
      <h1>Book Slot {slotId}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Start Time:
          <input
            type="datetime-local"
            name="startTime"
            value={bookingDetails.startTime}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          End Time:
          <input
            type="datetime-local"
            name="endTime"
            value={bookingDetails.endTime}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Vehicle Plate No:
          <input
            type="text"
            name="vehiclePlateNo"
            value={bookingDetails.vehiclePlateNo}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Vehicle Type:
          <select
            name="vehicleType"
            value={bookingDetails.vehicleType}
            onChange={handleChange}
            required
          >
            <option value="">Select Vehicle Type</option>
            <option value="Two Wheeler">Two Wheeler</option>
            <option value="SUV">SUV</option>
            <option value="Hatchback">Hatchback</option>
          </select>
        </label>
        <label>
          Contact No:
          <input
            type="tel"
            name="contactNo"
            value={bookingDetails.contactNo}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Level No:
          <input
            type="text"
            name="levelNo"
            value={bookingDetails.levelNo}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={bookingDetails.username}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Book Slot</button>
      </form>
    </div>
  );
};

export default BookingDetails;
