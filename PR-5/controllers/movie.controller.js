const users = require("../models/movie.schema");

const createmovie = async (req, res) => {
  const movie = new users(req.body);
  await movie.save();
  res.status(201).json(movie);
};

const updateMovie = async (req, res) => {
  let { id } = req.params;
  let data = await users.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(200).send(data);
};

const ratting = async (req, res) => {
  const { id } = req.params;
  const { rating } = req.body;
  const movie = await users.findById(id);

  if (!movie) {
    return res.status(404).json({ error: "Movie not found" });
  }

  if (rating >= 0 && rating <= 10) {
    movie.ratings.push({ value: rating });
    await movie.save();
    res.status(200).json(movie);
  } else {
    res.status(400).json({ error: "Invalid rating value" });
  }
};

const addcomment = async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  const movie = await users.findById(id);

  if (!movie) {
    return res.status(404).json({ error: "Movie not found" });
  }
  movie.comments.push({ text });
  await movie.save();

  res.json(movie);
};


const deleteMovie = async (req, res) => {
  const movieId = req.params.id;
  const movie = await users.findById(movieId);
  if (!movie) {
    return res.status(404).json({ error: "Movie not found" });
  }
  await users.findByIdAndDelete(movieId);
  res.json({ message: "Movie deleted" });
};

const filterMovie = async (req, res) => {
  const { title, addedBy, releaseDate, category } = req.query;
  const filter = {};
  if (title) filter.title = title;
  if (addedBy) filter.addedBy = addedBy;
  if (releaseDate) filter.releaseDate = releaseDate;
  if (category) filter.category = category;

  const movies = await users.find(filter);
  res.status(200).json(movies);
};
module.exports = {
  createmovie,
  updateMovie,
  deleteMovie,
  filterMovie,
  ratting,
  addcomment,
};
