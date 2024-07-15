import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between text-xl font-medium bg-blue-800 text-white p-6">
      <div>
        <p>Railway Management</p>
      </div>
      <div className="flex justify-between gap-4">
        <div>
          <Link to="/home">Home</Link>
        </div>
        <div>
          <Link to="/booking">Ticket</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
