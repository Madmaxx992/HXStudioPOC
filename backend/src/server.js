const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors"); // Import cors

const app = express();
const port = 5000;

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/HXStudio", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema and model
const projectSchema = new mongoose.Schema({
  projectName: String,
  projectTitle: String,
  projectDescription: String,
  domain: String,
  image: String,
});

const Project = mongoose.model("Project", projectSchema);

// Middleware
app.use(cors()); // Use cors middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
app.post(
  "/api/admin/dashboard/upload",
  upload.single("image"),
  async (req, res) => {
    try {
      const { projectName, projectTitle, projectDescription, domain } =
        req.body;
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

// Add this route to your Express server
app.get("/api/admin/dashboard", async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Serve static files (e.g., uploaded images)
app.use("/api/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
