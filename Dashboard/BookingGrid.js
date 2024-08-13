import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './BookingGrid.css';

const BookingDetails = () => {
    const { slotId } = useParams();
    const [bookingDetails, setBookingDetails] = useState({
        startTime: '',
        endTime: '',
        vehiclePlateNo: '',
        vehicleType: ''
    });

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
        
        // Show alert message
        alert('Booking successfully completed');
        
        // Clear the form fields
        setBookingDetails({
            startTime: '',
            endTime: '',
            vehiclePlateNo: '',
            vehicleType: ''
        });
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
                <button type="submit">Book Slot</button>
            </form>
        </div>
    );
};

export default BookingDetails;
