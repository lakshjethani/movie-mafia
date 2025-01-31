const express = require("express");
const axios = require("axios");
const router = express.Router();

require("dotenv").config();

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

router.get("/", async (req, res) => {
  const genre = req.query.genre || "";
  const sortBy = req.query.sort || "popularity.desc";
  let currentPage = parseInt(req.query.page) || 1;

  try {
    const genreResponse = await axios.get(`${TMDB_BASE_URL}/genre/movie/list`, {
        params: { api_key: TMDB_API_KEY },
    });

    const movieResponse = await axios.get(`${TMDB_BASE_URL}/discover/movie`, {
        params: {
          api_key: TMDB_API_KEY,
          with_genres: genre || undefined,
          sort_by: sortBy,
          page: currentPage,
        },
    });

    const totalPages = movieResponse.data.total_pages;
    
    currentPage = Math.min(Math.max(currentPage, 1), totalPages);

    res.render("pages/home", {
      movies: movieResponse.data.results,
      genres: genreResponse.data.genres,
      selectedGenre: genre,
      sortBy: sortBy,
      currentPage: currentPage,
      totalPages: totalPages,
    });
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).send("Error fetching data");
  }
});

router.get("/movie/:id", async (req, res) => {
  const movieId = req.params.id;
  try {
    const movieResponse = await axios.get(`${TMDB_BASE_URL}/movie/${movieId}`, {
      params: { api_key: TMDB_API_KEY },
    });

    const castResponse = await axios.get(`${TMDB_BASE_URL}/movie/${movieId}/credits`, {
      params: { api_key: TMDB_API_KEY },
    });

    const reviewsResponse = await axios.get(`${TMDB_BASE_URL}/movie/${movieId}/reviews`, {
      params: { api_key: TMDB_API_KEY },
    });

    const similarMoviesResponse = await axios.get(`${TMDB_BASE_URL}/movie/${movieId}/similar`, {
      params: { api_key: TMDB_API_KEY },
    });

    res.render("pages/movie", {
      movie: {
        ...movieResponse.data,
        cast: castResponse.data.cast,
        crew: castResponse.data.crew,
        reviews: reviewsResponse.data.results,
        similar_movies: similarMoviesResponse.data.results,
      },
    });
  } catch (error) {
    console.error("Error fetching movie details:", error.message);
    res.status(500).send("Error fetching movie details");
  }
});

router.get("/search", async (req, res) => {
  const query = req.query.q;
  const genre = req.query.genre || "";
  const sortBy = req.query.sort || "popularity.desc";
  let currentPage = parseInt(req.query.page) || 1;

  try {
    const genreResponse = await axios.get(`${TMDB_BASE_URL}/genre/movie/list`, {
      params: { api_key: TMDB_API_KEY },
    });

    const response = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
      params: {
        query,
        api_key: TMDB_API_KEY,
        sort_by: sortBy,
        page: currentPage,
        with_genres: genre || undefined,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching search results:", error.message);
    res.status(500).send("Error fetching search results");
  }
});

router.get("/actor/:id", async (req, res) => {
  const actorId = req.params.id;
  try {
    const actorResponse = await axios.get(`${TMDB_BASE_URL}/person/${actorId}`, {
      params: { api_key: TMDB_API_KEY },
    });

    const creditsResponse = await axios.get(`${TMDB_BASE_URL}/person/${actorId}/movie_credits`, {
      params: { api_key: TMDB_API_KEY },
    });

    res.render("pages/actor", {
      actor: actorResponse.data,
      movies: creditsResponse.data.cast,
    });
  } catch (error) {
    console.error("Error fetching actor details:", error.message);
    res.status(500).send("Error fetching actor details");
  }
});
module.exports = router;
