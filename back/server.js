const express = require('express');
const cors = require('cors');
const app = express();

const port = 3001;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

//Routes
var routes = require('./routes.js');
app.use('/', routes);

const whitelist = ["http://localhost:3000"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//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