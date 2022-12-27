const express = require('express');
const app = express();

const port = 3002;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

//Routes
var routes = require('./routes.js');
app.use('/', routes);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//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