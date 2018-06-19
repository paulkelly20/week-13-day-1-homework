const express = require('express');
const router = new express.Router();
const Films = require("../models/films.js")

const films = Films()
router.get('/', function(req, res){
  res.json({films})
});

module.exports = router;
