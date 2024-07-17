import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <div className="flex justify-between text-xl font-medium bg-blue-800 text-white p-6">
      <div>
        <p>Railway Management</p>
      </div>
      <div className="flex justify-between gap-7">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/booking">Ticket</Link>
        </div>
        <div>
          <Link to="/bookingDetail">Booking Details</Link>
        </div>
        <div>
          <Link to="/addTrain">Add Train</Link>
        </div>
        {!token ? (
          <>
            <div>
              <Link to="/login">Login</Link>
            </div>
            <div>
              <Link to="/signup">Signup</Link>
            </div>
          </>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
