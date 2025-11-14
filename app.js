const express = require("express");
const app = express();

const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const ExpressError = require("./utils/expressError");

require("dotenv").config();

// --- DB connect
const MONGO_URL = process.env.MONGO_URI;
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Mongo connected"))
  .catch((err) => console.error("Mongo connection error:", err));

// --- Express setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    name: "vision.vault",
    secret: process.env.SESSION_SECRET || "dev-secret",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true, maxAge: 1000 * 60 * 60 * 24 }, // 1 day
  })
);

// --- Route imports
let authRoutes = null;
try {
  // If the file exists and exports a router, this will succeed.
  authRoutes = require("./routes/auth");
} catch (e) {
  // Simple log — app will continue to run without the auth routes.
  console.warn("Optional routes './routes/auth' not loaded:", e.message);
}

// --- Mount routes (simple, normal Express style)
if (authRoutes) {
  // If authRoutes is a router, mount it.
  app.use("/auth", authRoutes);
  console.log("Mounted /auth routes");
} else {
  console.log("Skipping /auth mount (file not present or failed to load)");
}

const courseRoutes = require("./routes/courses");

app.use("/courses", courseRoutes);
console.log("Mounted /courses routes");

// --- Root
app.get("/", (req, res) => {
  try {
    res.render("listings/index");
  } catch (e) {
    res.status(200).send("Home (index view missing)");
  }
});

app.get("/hackathons", (req, res) => {
  res.render("listings/hackathons");
});

// Catch-all 404
app.all(/.*/, (req, res, next) => {
  next(new ExpressError(404, "Page Not Found!"));
});

// Error handler
app.use((err, req, res, next) => {
  console.error("ERROR HANDLER:", err);
  const { status = 500, message = "Something went wrong" } = err;
  // If the client accepts HTML, respond with a plain message (you could render an error view here).
  if (req.accepts("html")) return res.status(status).send(message);
  // Otherwise send JSON (useful for API/XHR).
  res.status(status).json({ error: message });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Listening to port", PORT));
