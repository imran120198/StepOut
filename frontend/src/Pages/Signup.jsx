import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [form, setForm] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://stepout-backend-164s.onrender.com/user/signup", form)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };

  console.log(form)

  return (
    <>
      <div className="m-8">
        <h2 className="text-[25px] font-bold">Signup</h2>
      </div>
      <form className="flex flex-col m-auto w-[30%]" onSubmit={handleSubmit}>
        <input
          className="border p-2 mb-4 rounded"
          placeholder="Enter UserName"
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
        <input
          className="border p-2 mb-4 rounded"
          placeholder="Enter Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          className="border p-2 mb-4 rounded"
          placeholder="Enter Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <button
          className="border bg-green-500 text-[18px] p-2 font-bold rounded-full"
          type="submit"
        >
          Signup
        </button>
      </form>
    </>
  );
};

export default Signup;
