const express = require("express");
const { authMiddleware, authorize } = require("../middlewares/authMiddleware");
const multer = require("multer");
const path = require("path");
const Project = require("../models/projectModel");

const router = express.Router();

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

// Route to handle form submission
router.post(
  "/upload",
  authMiddleware,
  authorize(["admin"]), // Only allow admins to upload
  upload.single("image"),
  async (req, res) => {
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
  }
);

// Route to get all projects (available to all authenticated users)
router.get("/", authMiddleware, async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Serve static files (e.g., uploaded images)
router.use("/uploads", express.static(path.join(__dirname, "../uploads")));

module.exports = router;
