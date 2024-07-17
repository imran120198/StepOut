import React, { useState } from "react";
import axios from "axios";
import { Watch } from "react-loader-spinner";
import { toast, ToastContainer } from "react-toastify";

const HomePage = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [trains, setTrains] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleTrain = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://stepout-backend-164s.onrender.com/train",
        {
          params: {
            source,
            destination,
          },
        }
      );
      setTrains(response.data);
    } catch (err) {
      console.error("Failed to fetch trains", err);
      toast.error("Failed to fetch trains");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <ToastContainer />
      <form
        onSubmit={handleTrain}
        className="border bg-gray-400 flex flex-row p-5 justify-evenly"
      >
        <select
          value={source}
          onChange={(e) => setSource(e.target.value)}
          required
          className="border p-2 w-[30%]"
        >
          <option>Source</option>
          <option>Delhi</option>
          <option>Ranchi</option>
          <option>Kolkata</option>
          <option>Mumbai</option>
        </select>
        <select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
          className="border p-2 w-[30%]"
        >
          <option>Destination</option>
          <option>Delhi</option>
          <option>Ranchi</option>
          <option>Kolkata</option>
          <option>Mumbai</option>
        </select>
        <button
          type="submit"
          className="border bg-blue-500 rounded-full w-[10%] font-medium"
        >
          Search
        </button>
      </form>
      {isLoading ? (
        <div className="flex items-center justify-center mt-4">
          <Watch height={60} width={60} />
        </div>
      ) : (
        <div className="w-full">
          <table className="table-auto w-full border-collapse border border-gray-800">
            <thead>
              <tr>
                <th className="border border-gray-600 px-4 py-2">Train No</th>
                <th className="border border-gray-600 px-4 py-2">Name</th>
                <th className="border border-gray-600 px-4 py-2">Source</th>
                <th className="border border-gray-600 px-4 py-2">
                  Destination
                </th>
                <th className="border border-gray-600 px-4 py-2">
                  Total Seats
                </th>
                <th className="border border-gray-600 px-4 py-2">
                  Available Seats
                </th>
              </tr>
            </thead>
            <tbody>
              {trains.map((train) => (
                <tr key={train._id}>
                  <td className="border border-gray-600 px-4 py-2">
                    {train.trainId}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    {train.name}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    {train.source}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    {train.destination}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    {train.totalSeats}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    {train.availableSeats}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default HomePage;
