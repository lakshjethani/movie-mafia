const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));


app.get("/", (req, res) => {
  res.render("index", { message: "Welcome to Movie Mafia" });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});