const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/example', (req, res) => {
  res.send(`This some text`);
});

const port = 8080;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
