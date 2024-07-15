import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTrain = () => {
  const [trainId, setTrainId] = useState("");
  const [name, setName] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [totalSeats, setTotalSeats] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken");
    if (!adminToken) {
      navigate("/login");
    }
  }, [navigate]);

  const handleAddTrain = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://stepout-backend-164s.onrender.com/train",
        {
          trainId,
          name,
          source,
          destination,
          totalSeats,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        }
      );

      if (response.data.error) {
        setMessage(response.data.error);
      } else {
        setMessage("Train added successfully!");
      }
    } catch (err) {
      console.error("Failed to add train", err);
      setMessage("Failed to add train");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form
        onSubmit={handleAddTrain}
        className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg"
      >
        <h2 className="text-2xl font-bold text-center">Add Train</h2>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Train No."
            value={trainId}
            onChange={(e) => setTrainId(e.target.value)}
            required
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            placeholder="Source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            required
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
            className="border p-2 rounded w-full"
          />
          <input
            type="number"
            placeholder="Total Seats"
            value={totalSeats}
            onChange={(e) => setTotalSeats(e.target.value)}
            required
            className="border p-2 rounded w-full"
          />
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-full font-medium"
          >
            Add Train
          </button>
        </div>
      </form>
      {message && <p className="mt-4 text-center text-red-500">{message}</p>}
    </div>
  );
};

export default AddTrain;
