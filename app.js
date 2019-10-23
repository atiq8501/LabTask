//DECLARATION
var express = require('express');
var bodyParser = require('body-parser');
var expSession = require('express-session');
var cookieParser = require('cookie-parser');
var ejs = require('ejs');
var login = require('./controllers/login');
var home = require('./controllers/home');
var user = require('./controllers/user');
var logout = require('./controllers/logout');
var app = express();
var port = 100;
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(expSession({secret:'my top secret value', saveUninitialized:true, resave: false}));
app.use(cookieParser());
app.use('/login', login);
app.use('/home', home);
app.use('/user', user);
app.use('/logout', logout);

app.get('/', function(request, response){
	response.redirect('/home');
});



app.listen(port, function(){
	console.log('server is running on port '+port.toString());
});