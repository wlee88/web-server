var express = require('express');
var app = express();
var PORT = 3001;
var middleware = require('./middleware.js');


// witht his method you can activate middleware to hit on every page req.
app.use(middleware.logger);

// with this method it is specific to route
app.get('/about', middleware.requireAuthentication, (req, res) => {
  res.end("<h1>About Us!</h1>");
});
app.use(express.static(`${__dirname}/public`));
//console.log(__dirname);
app.listen(PORT, () => {
  console.log(`express server started on port ${PORT}`);
});
