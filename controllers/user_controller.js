var express = require('express');
var router = express.Router();
var user = require('../models/user_info.js');

// TODO Create get route for indexß
router.get('/', function(req, res){
  res.render('index', {});
});

router.get('/user_page', function(req, res){
  res.render('userpage');
});

router.post('/login', function(req, res){
  res.redirect('/user_page');
});

module.exports = router;