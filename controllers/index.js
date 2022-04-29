const express = require('express'),
router = express.Router();

router.get('/', function(request, response) {
  response.status(200);
  response.setHeader('Content-Type', 'text/html')
  response.render("views/index");
});

router.get('/about', function(request, response) {
  response.status(200);
  response.setHeader('Content-Type', 'text/html')
  response.render("views/about");
});

router.get('/gallery', function(request, response) {
  response.status(200);
  response.setHeader('Content-Type', 'text/html')
  response.render("views/gallery");
});

module.exports = router
