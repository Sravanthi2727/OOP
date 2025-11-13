// routes/courses.js
const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

const dataPath = path.join(__dirname, "..", "data", "courses.json");
console.log("[courses.js] expected dataPath =", dataPath);

// load JSON safely
let rawData = null;
try {
  const raw = fs.readFileSync(dataPath, "utf8");
  rawData = JSON.parse(raw);
  console.log("[courses.js] loaded courses JSON successfully");
} catch (e) {
  console.error(
    "[courses.js] failed to load/parse JSON at",
    dataPath,
    "\n",
    e.message
  );
  rawData = null;
}

// Helper: find the array of courses inside the JSON
function extractCourses(obj) {
  if (!obj) return [];
  if (Array.isArray(obj)) return obj;
  if (obj.courses && Array.isArray(obj.courses)) return obj.courses;
  // search first array value if structure is weird
  for (const v of Object.values(obj)) {
    if (Array.isArray(v)) return v;
  }
  return [];
}

let courses = extractCourses(rawData);

// Ensure courses is an array
if (!Array.isArray(courses)) courses = [];

// Assign sequential numeric ids if missing, and remove any slug fields
(function ensureIds() {
  for (let i = 0; i < courses.length; i++) {
    const c = courses[i];
    // If id exists and is a number, keep it; else assign sequential id (1-based)
    if (!("id" in c) || typeof c.id !== "number" || Number.isNaN(c.id)) {
      c.id = i + 1;
    }
    // remove slug to avoid accidental usage
    if ("slug" in c) delete c.slug;
  }
})();

console.log("[courses.js] built courses array — count =", courses.length);

// List all courses
router.get("/", (req, res) => {
  res.render("listings/courses", { courses });
});

// Course detail by numeric id
router.get("/:id", (req, res, next) => {
  const idParam = req.params.id;
  // accept numeric id strings; disallow non-numeric to avoid matching other routes
  const id = Number(idParam);
  if (!Number.isInteger(id)) {
    console.log("[courses.js] invalid id param (not integer):", idParam);
    return next(); // let other middleware/routes handle it (or 404)
  }

  const course = courses.find((c) => Number(c.id) === id);
  console.log(
    "[courses.js] requested id =",
    id,
    "found=",
    !!course,
    course && course.title
  );

  if (!course) return next();

  res.render("listings/course-detail", { course });
});

module.exports = router;
