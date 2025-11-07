// app.js (patched to mount auth routes under /auth)
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/expressError.js");
const authRoutes = require("./routes/auth");

require("dotenv").config();

const MONGO_URL =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/visionvault";

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Mongo connected"))
  .catch((err) => console.error("Mongo connection error:", err));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

// Root route
app.get("/", (req, res) => {
  res.render("listings/index");
});

// Mount auth routes under /auth
app.use("/auth", authRoutes);

// Catch-all for 404
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found!"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  const { status = 500, message = "Something went wrong" } = err;
  // if you want to render an error page, use res.render('error', { message, status })
  res.status(status).send(message);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Listening to port", PORT);
});
