const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  jobType: { type: String, required: true },
  workMode: { type: String, required: true },
  salaryMin: { type: String },
  salaryMax: { type: String },
  experience: { type: String },
  education: { type: String },
  description: { type: String },
  responsibilities: { type: String },
  requirements: { type: String },
  benefits: { type: String },
  skills: [{ type: String, required: true }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Job", JobSchema);
