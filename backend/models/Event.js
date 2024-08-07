const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  name: String,
  mode: String,
  type: String,
  date: Date,
  time: String,
  duration: String,
  description: String,
  audience: String,
  specialRequirements: String,
});

module.exports = mongoose.models.Event || mongoose.model("Event", EventSchema);
