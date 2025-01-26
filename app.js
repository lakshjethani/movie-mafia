const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

const moviesRoute = require("./routes/movies");

app.use("/", moviesRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
