import React from "react";

const BookingCard = ({ booking }) => {
  return (
    <div className="mt-10 w-full max-w-md p-4 space-y-3 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center">Booking Details</h2>
      <p>
        <strong>Booking ID:</strong> {booking._id}
      </p>
      <p>
        <strong>Train ID:</strong> {booking.trainId}
      </p>
      <p>
        <strong>Seats Booked:</strong> {booking.seatsBooked}
      </p>
      <p>
        <strong>User ID:</strong> {booking.userId}
      </p>
    </div>
  );
};

export default BookingCard;
