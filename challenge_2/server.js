const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.urlencoded())

app.get('/', (req, res) => res.sendFile(path.join(`${__dirname}/client/index.html`)));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.post('/', (req, res) => {
  console.log(req.body);
});