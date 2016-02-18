var express = require('express');
var router = express.Router();
var user = require('../models/user_info.js');

// Main page
router.get('/', function(req, res){
  user.showUsers(function(err, theInfo){
    res.render('index', {theInfo});
  });
});

// User page on login success
router.get('/user_page', function(req, res){
  res.render('userpage');
});

router.post('/login', function(req, res){
  user.userLogin(req.body.loginEmail, req.body.loginPassword, function(err, data){
    if(err){ throw err }

    if(data.length > 0){
      req.session.authenticated = true;
      res.redirect('/user_page');
    }else{
      console.log('Invalid user entry');
      res.redirect('/');
    }
  });
});

module.exports = router;

// TEST SUCCESS - Index and login work