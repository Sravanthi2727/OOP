const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const MONGO_URL = "mongodb://127.0.0.1:27017/......";

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true })); //to parse the ids
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

main()
  .then(() => {
    console.log("Connected to db");
  })
  .catch((e) => {
    console.log(e);
  });

//for db
async function main() {
  await mongoose.connect(MONGO_URL);
}

//home route
app.get("/", (req, res) => {
  res.send("I am listening");
});

app.all(/.*/, (req, res, next) => {
  next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) => {
  // console.error(err.stack);
  // res.status(status).send(message);
});

app.listen(8080, () => {
  console.log("Listening to port 8080");
});
