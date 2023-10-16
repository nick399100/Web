const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse JSON data
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/k.html');
});0

app.post('/posts', function (req, res) {
  console.log('Received data:', req.body);

  // You can process the data here as needed.

  res.sendStatus(200); // Send a success response
});

app.listen(3000, function () {
  console.log('Server is listening on port 3000');
});