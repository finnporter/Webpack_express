//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

var express = require('express');
var filmsRouter = new express.Router();

filmsRouter.post('/', function(req, res) {
  films.push(req.body.film);
  res.json(films);
});

filmsRouter.put('/:id', function(req, res) {
  films[req.params.id] = req.body.film;
  res.json(films);
});

filmsRouter.get('/:id', function(req, res) {
  res.json({data: films[req.params.id]})
});

filmsRouter.delete('/:id', function(req, res) {
  films.splice(req.params.id, 1);
  res.json(films);
});

filmsRouter.get('/', functio(req, res) {
  res.json(films);
});

module.exports = filmsRouter;