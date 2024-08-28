// models/projectModel.js

const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  projectName: String,
  projectTitle: String,
  projectDescription: String,
  domain: String,
  image: String,
});

module.exports = mongoose.model("Project", projectSchema);
