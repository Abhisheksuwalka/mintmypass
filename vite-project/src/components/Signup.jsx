import axios from "axios";
import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/auth/signup", form)
      .then((res) => alert("User registered successfully"))
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit} className="formStyle">
      <input
        type="text"
        name="username"
        value={form.username}
        onChange={handleChange}
        placeholder="Username"
        required
        className="inputStyle"
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        required
        className="inputStyle"
      />
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
        required
        className="inputStyle"
      />
      <button type="submit" className="buttonStyle">
        Sign Up
      </button>
    </form>
  );
};

export default Signup;
