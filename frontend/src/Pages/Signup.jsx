import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
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
        "https://stepout-backend-164s.onrender.com/user/signup",
        form
      );
      console.log(res.data);
      toast.success("Signup successful!");
      navigate("/login");
    } catch (err) {
      console.error(err);
      toast.error("Signup failed. Please try again.");
    } finally {
      setLoading(false); // Set loading to false when the request is complete
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="m-8">
        <h2 className="text-[25px] font-bold">Signup</h2>
      </div>
      <form className="flex flex-col m-auto w-[30%]" onSubmit={handleSubmit}>
        <input
          className="border p-2 mb-4 rounded"
          placeholder="Enter UserName"
          type="text"
          name="username"
          value={form.username || ""}
          onChange={handleChange}
        />
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
          disabled={loading} // Disable the button when loading
        >
          {loading ? "Signing In..." : "Signup"} {/* Show loading text when loading */}
        </button>
      </form>
    </>
  );
};

export default Signup;
