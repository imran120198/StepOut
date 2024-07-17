import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
