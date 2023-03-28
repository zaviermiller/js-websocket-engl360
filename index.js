const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http');
const port = 3000;

const server = http.createServer(app);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

require('./routes')(app);

server.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
