import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import HomePage from "../Pages/HomePage";
import Booking from "../Pages/Booking";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
