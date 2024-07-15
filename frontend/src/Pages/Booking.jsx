import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Booking = () => {
  const [trainId, setTrainId] = useState("");
  const [seats, setSeats] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://stepout-backend-164s.onrender.com/booking",
        {
          trainId,
          seats,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data.error) {
        setMessage(response.data.error);
      } else {
        setMessage("Booking successful!");
      }
    } catch (err) {
      console.error("Failed to book ticket", err);
      setMessage("Failed to book ticket");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <form
        onSubmit={handleBooking}
        className="w-full max-w-md p-4 space-y-3 bg-white shadow-md rounded-lg"
      >
        <h2 className="text-2xl font-bold text-center">Book a Ticket</h2>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Train ID"
            value={trainId}
            onChange={(e) => setTrainId(e.target.value)}
            required
            className="border p-2 rounded w-full"
          />
          <input
            type="number"
            placeholder="Seats"
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
            required
            className="border p-2 rounded w-full"
          />
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-full font-medium"
          >
            Book
          </button>
        </div>
      </form>
      {message && (
        <p className="mt-4 text-center text-[20px] text-red-400">{message}</p>
      )}
    </div>
  );
};

export default Booking;
