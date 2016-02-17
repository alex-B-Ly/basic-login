var express = require('express');
var bodyParser = require('body-parser');
var handleB = require('express-handlebars');
var session = require('express-session');
var PORT = process.env.NODE_ENV || 8080;

var app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));

// SESSION
app.use(session({
  secret: "hello",
  cookie: {
    maxAge: 1000 * 60 * 30
  },
  saveUninitialized: true,
  resave: false
}));

// HANDLEBARS
app.engine('handlebars', handleB({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// MIDDLEWARE - public
app.use('/css', express.static('public/css'));
app.use('/js', express.static('public/js'));
app.use('/img', express.static('public/img'));

var routes = require('./controllers/user_controller.js');
app.use('/', routes);

app.listen(PORT, function(){
  console.log('Listening on port: ',PORT);
})