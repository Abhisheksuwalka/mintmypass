const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

// Register for an event
router.post("/", async (req, res) => {
  const { name, email, tickets, eventId } = req.body;
  try {
    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ message: "Event not found" });

    // Implement registration logic (e.g., saving to a database)
    res.json({ message: "Registered successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
