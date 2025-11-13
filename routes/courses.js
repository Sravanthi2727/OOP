// routes/courses.js
const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

// Load courses.json directly (assuming correct format)
const dataPath = path.join(__dirname, "..", "data", "courses.json");
let courses = [];

try {
  const raw = fs.readFileSync(dataPath, "utf8");
  courses = JSON.parse(raw);
  console.log("[courses.js] Loaded courses:", courses.length);
} catch (error) {
  console.error("[courses.js] Failed to load courses.json:", error.message);
}

// Show all courses
router.get("/", (req, res) => {
  res.render("listings/courses", { courses });
});

// Show course details by ID
router.get("/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const course = courses.find((c) => c.id === id);

  if (!course) return next(); // triggers 404 from app.js

  res.render("listings/course-detail", { course });
});

module.exports = router;
