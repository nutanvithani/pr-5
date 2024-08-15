const { Router } = require("express");
const { createmovie, updateMovie, deleteMovie, filterMovie, ratting, addcomment } = require("../controllers/movie.controller");

const movieRoute = Router();

movieRoute.post('/create', createmovie);
movieRoute.patch("/update/:id",updateMovie)
movieRoute.delete("/delete/:id", deleteMovie)
movieRoute.patch('/rating/:id', ratting );
movieRoute.patch('/comment/:id', addcomment );
movieRoute.get('/filter', filterMovie );

module.exports = movieRoute;