import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false); // Added loading state
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the request starts
    try {
      const res = await axios.post(
        "https://stepout-backend-164s.onrender.com/user/login",
        form
      );
      toast.success("Login successful!");
      localStorage.setItem("token", res.data.token);
      if (form.email === "admin@gmail.com" && form.password === "admin") {
        localStorage.setItem("adminToken", "MASAI");
      }
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error("Login failed. Please try again.");
    } finally {
      setLoading(false); // Set loading to false when the request is complete
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="m-8">
        <h2 className="text-[25px] font-bold">Login</h2>
      </div>
      <form className="flex flex-col m-auto w-[30%]" onSubmit={handleSubmit}>
        <input
          className="border p-2 mb-4 rounded"
          placeholder="Enter Email"
          type="email"
          name="email"
          value={form.email || ""}
          onChange={handleChange}
        />
        <input
          className="border p-2 mb-4 rounded"
          placeholder="Enter Password"
          type="password"
          name="password"
          value={form.password || ""}
          onChange={handleChange}
        />
        <button
          className="border bg-green-500 text-[18px] p-2 font-bold rounded-full"
          type="submit"
          disabled={loading} 
        >
          {loading ? "Loading..." : "Login"}{" "}
        </button>
      </form>
    </>
  );
};

export default Login;
