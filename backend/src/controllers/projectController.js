// src/controllers/projectController.js
const Project = require("../models/Project");

// Route handler to upload a new project
const uploadProject = async (req, res) => {
  try {
    const { projectName, projectTitle, projectDescription, domain } = req.body;
    const image = req.file ? req.file.filename : "";

    const newProject = new Project({
      projectName,
      projectTitle,
      projectDescription,
      domain,
      image,
    });

    await newProject.save();
    res.status(200).json({ message: "Project uploaded successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Route handler to get all projects
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  uploadProject,
  getProjects,
};
