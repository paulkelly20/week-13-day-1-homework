const Film = require('../models/film');
const Review = require('../models/review');
const Films = require("../models/films.js")
const express  = require('express');
const filmRouter = new express.Router();

const films = Films()

filmRouter.post('/:id/review', function(req, res){
  const review = new Review(req.body)
  const index = req.params.id;
  film = films[index]
  film.addReview(review);
  res.json({films : films});
});

filmRouter.get("/:id", function(req, res){
  const index = req.params.id;
  res.json({film: films[index]})
})

filmRouter.put("/:id", function(req, res){
  const index = req.params.id;
  films[index] = new Film(req.body)
  res.json({films: films})
})

filmRouter.delete("/:id", function(req, res){
  const index = req.params.id;
  films.splice(index, 1);
  res.json({films: films})

})
filmRouter.get('/', function(req, res){
  res.json({films: films})
});

filmRouter.post('/', function(req, res){
  const film = new Film(req.body)
  films.push(film);
  res.json({films : films});
});




module.exports = filmRouter;
