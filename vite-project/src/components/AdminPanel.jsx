import axios from "axios";
import React, { useState } from "react";
import "./AdminPanel.css";

const AdminPanel = () => {
  const [form, setForm] = useState({
    name: "",
    mode: "",
    type: "",
    date: "",
    time: "",
    duration: "",
    description: "",
    audience: "",
    specialRequirements: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/admin", form)
      .then((res) => alert("Event created successfully"))
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit} className="adminFormStyle">
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Event Name"
        required
        className="inputStyle"
      />
      <input
        type="text"
        name="mode"
        value={form.mode}
        onChange={handleChange}
        placeholder="Mode"
        required
        className="inputStyle"
      />
      <input
        type="text"
        name="type"
        value={form.type}
        onChange={handleChange}
        placeholder="Type"
        required
        className="inputStyle"
      />
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        required
        className="inputStyle"
      />
      <input
        type="time"
        name="time"
        value={form.time}
        onChange={handleChange}
        required
        className="inputStyle"
      />
      <input
        type="text"
        name="duration"
        value={form.duration}
        onChange={handleChange}
        placeholder="Duration"
        required
        className="inputStyle"
      />
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        required
        className="textareaStyle"
      ></textarea>
      <input
        type="text"
        name="audience"
        value={form.audience}
        onChange={handleChange}
        placeholder="Target Audience"
        required
        className="inputStyle"
      />
      <input
        type="text"
        name="specialRequirements"
        value={form.specialRequirements}
        onChange={handleChange}
        placeholder="Special Requirements"
        className="inputStyle"
      />
      <button type="submit" className="buttonStyle">
        Create Event
      </button>
    </form>
  );
};

export default AdminPanel;
