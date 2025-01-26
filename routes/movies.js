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

router.get("/movie/:id", async (req, res) => {
  const movieId = req.params.id;
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
      params: { api_key: TMDB_API_KEY },
    });
    res.render("pages/movie", { movie: response.data });
  } catch (error) {
    console.error("Error fetching movie details:", error.message);
    res.status(500).send("Error fetching movie details");
  }
});

router.get("/search", async (req, res) => {
  const query = req.query.q;
  try {
    const response = await axios.get("https://api.themoviedb.org/3/search/movie", {
      params: { query, api_key: TMDB_API_KEY },
    });
    res.render("pages/home", { movies: response.data.results });
  } catch (error) {
    console.error("Error fetching search results:", error.message);
    res.status(500).send("Error fetching search results");
  }
});


module.exports = router;
