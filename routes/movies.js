const express = require("express");
const axios = require("axios");
const router = express.Router();

require("dotenv").config();

const TMDB_API_KEY = process.env.TMDB_API_KEY;

router.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://api.themoviedb.org/3/movie/popular", {
      params: { api_key: TMDB_API_KEY },
    });
    res.render("pages/home", { movies: response.data.results });
  } catch (error) {
    console.error("Error fetching popular movies:", error.message);
    res.status(500).send("Error fetching data");
  }
});

module.exports = router;
