const express = require('express');
const app = express();

const port = 3001;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

//Routes
var routes = require('./routes.js');
app.use('/', routes);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});