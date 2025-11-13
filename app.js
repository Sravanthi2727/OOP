// app.js (robust mounts + debug logging)
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const ExpressError = require("./utils/expressError");
const courseRoutes = require("./routes/courses");

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
    cookie: { secure: false, httpOnly: true, maxAge: 1000 * 60 * 60 * 24 },
  })
);

// --- Require route modules (may not exist)
let authRoutes;
try {
  authRoutes = require("./routes/auth");
} catch (e) {
  console.error("require ./routes/auth failed:", e.message);
}

// --- Diagnostic: print types/keys
function inspectModule(name, mod) {
  if (mod === undefined) {
    console.log(`${name}: <undefined>`);
    return;
  }
  if (mod === null) {
    console.log(`${name}: <null>`);
    return;
  }
  console.log(`${name}: typeof=${typeof mod}`);
  try {
    console.log(`${name} keys:`, Object.keys(mod).slice(0, 20));
  } catch (e) {
    console.log(`${name} keys: <unable to list keys>`);
  }
  if (mod && mod.default) {
    console.log(`${name}.default typeof=${typeof mod.default}`);
  }
}
inspectModule("authRoutes", authRoutes);

// --- helper to test if value is mountable router/middleware
function isMountable(x) {
  if (!x) return false;
  // router created by express has 'stack' (array) and 'use' method; middleware is function
  if (typeof x === "function") return true;
  if (x && Array.isArray(x.stack)) return true;
  if (x && typeof x.handle === "function") return true;
  return false;
}

// --- Try to resolve a router from various possible exports
function resolveRouter(maybeMod) {
  if (!maybeMod) return null;
  if (isMountable(maybeMod)) return maybeMod;
  // try default export (ES module transpiled)
  if (maybeMod.default && isMountable(maybeMod.default))
    return maybeMod.default;
  // try .router property (some modules export { router })
  if (maybeMod.router && isMountable(maybeMod.router)) return maybeMod.router;
  // try common named export
  if (maybeMod.routes && isMountable(maybeMod.routes)) return maybeMod.routes;
  return null;
}

// --- Mount function with safety and logging
function safeMount(path, maybeMod) {
  const resolved = resolveRouter(maybeMod);
  if (resolved) {
    app.use(path, resolved);
    console.log(`Mounted router at ${path}`);
  } else {
    console.warn(
      `Skipping mount for ${path}: not a router (type: ${typeof maybeMod}). See earlier inspect logs.`
    );
  }
}

// --- Mount routes (only if valid)
safeMount("/auth", authRoutes); // auth routes (signup/login/verify)
app.use("/courses", courseRoutes);
console.log("Mounted router at /courses (from app.js)");

// Root
app.get("/", (req, res) => {
  // ensure view exists
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
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found!"));
});

// Error handler
app.use((err, req, res, next) => {
  console.error("ERROR HANDLER:", err);
  const { status = 500, message = "Something went wrong" } = err;
  if (req.accepts("html")) return res.status(status).send(message);
  res.status(status).json({ error: message });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Listening to port", PORT));
