import axios from "axios";
import React, { useState } from "react";
import "./Login.css";

const Login = ({ setToken }) => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/auth/login", form)
      .then((res) => setToken(res.data.token))
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit} className="formStyle">
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
        Login
      </button>
    </form>
  );
};

export default Login;
