var express = require('express');
var router = new express.Router();
var filmsRouter = require('./films.js');

router.use('/films', filmsRouter);

router.get('/', function(req, res) {
  res.json({data: 'Films!'});
});


module.exports = router;