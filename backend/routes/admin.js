const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

// Create a new event
router.post("/", async (req, res) => {
  const {
    name,
    mode,
    type,
    date,
    time,
    duration,
    description,
    audience,
    specialRequirements,
  } = req.body;
  const newEvent = new Event({
    name,
    mode,
    type,
    date,
    time,
    duration,
    description,
    audience,
    specialRequirements,
  });

  try {
    const savedEvent = await newEvent.save();
    res.json(savedEvent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
