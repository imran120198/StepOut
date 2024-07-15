import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import HomePage from "../Pages/HomePage";
import Booking from "../Pages/Booking";
import AddTrain from "../Pages/AddTrain";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/addtrain" element={<AddTrain />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
