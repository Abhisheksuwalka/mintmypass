import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./EventRegister.css";

const EventRegister = () => {
  const { id } = useParams();
  const [form, setForm] = useState({ name: "", email: "", tickets: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/register", { ...form, eventId: id })
      .then((res) => alert("Registered successfully"))
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit} className="formStyle">
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
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
        type="number"
        name="tickets"
        value={form.tickets}
        onChange={handleChange}
        placeholder="Number of Tickets"
        required
        className="inputStyle"
      />
      <button type="submit" className="buttonStyle">
        Register
      </button>
    </form>
  );
};

export default EventRegister;
