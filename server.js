//..............Include Express..................................//
const express = require('express');
const ejs = require('ejs');
const fs = require('fs');

//..............Create an Express server object..................//
const app = express();

let server = require('http').Server(app);

//..............Apply Express middleware to the server object....//
app.use(express.json()); //Used to parse JSON bodies (needed for POST requests)
app.use(express.urlencoded());
app.use(express.static('public')); //specify location of static assests
app.set('views', __dirname ); //specify location of templates
app.set('view engine', 'ejs'); //specify templating library

app.get('/', function(request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.get('/about', function(request, response) {
  response.sendFile(__dirname + "/about.html");

});

app.get('/gallery', function(request, response) {
  response.sendFile(__dirname + "/gallery.html");

});

app.use("", function(request, response) {
  response.redirect('/error?code=400');
});

//..............Start the server...............................//
const port = process.env.PORT || 3000;
server.listen(port, function() {
  console.log('Server started at http://localhost:'+port+'.')
});
