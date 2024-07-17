import React, { useState } from "react";
import axios from "axios";
import BookingCard from "./BookingCard";

const BookingDetails = () => {
  const [bookingId, setBookingId] = useState("");
  const [booking, setBooking] = useState(null);
  const [message, setMessage] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://stepout-backend-164s.onrender.com/booking/${bookingId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setBooking(response.data);
      setMessage("");
    } catch (error) {
      console.error("Failed to fetch booking details", error);
      setBooking(null);
      setMessage("Failed to fetch booking details");
    }
  };

  console.log(booking);
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="w-full max-w-md p-4 space-y-3 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center">Search Booking</h2>
        <input
          type="text"
          placeholder="Booking ID"
          value={bookingId}
          onChange={(e) => setBookingId(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          onClick={handleSearch}
          className="w-full py-2 text-white bg-blue-500 rounded-full font-medium"
        >
          Search
        </button>
        {message && (
          <p className="mt-4 text-center text-[20px] text-red-400">
            {booking._id}
          </p>
        )}

        {booking && <BookingCard booking={booking} />}
      </div>
    </div>
  );
};

export default BookingDetails;
