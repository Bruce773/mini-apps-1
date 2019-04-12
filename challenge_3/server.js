const express = require('express');
const Promise = require('bluebird');
const mysql = require('mysql');
const path = require('path');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(express.static('public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

var db = mysql.createConnection({
  user: 'root',
  password: 'password',
});

const database = Promise.promisifyAll(db);

database
  .connectAsync()
  .then(() => database.queryAsync('CREATE DATABASE IF NOT EXISTS orders'))
  .then(() => database.queryAsync('USE orders'))
  .then(() =>
    database
      .queryAsync(
        `
  CREATE TABLE IF NOT EXISTS user (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstname TEXT,
    lastname TEXT,
    email TEXT,
    password TEXT
  );`
      )
      .then(() =>
        database.queryAsync(`
    CREATE TABLE IF NOT EXISTS address (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      lineone INT,
      linetwo INT,
      city TEXT,
      state TEXT,
      zipcode INT,
      phonenumber INT
    );
  `)
      )
      .then(() =>
        database.queryAsync(`
  CREATE TABLE IF NOT EXISTS cardinfo (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cardnumber INT,
    expirationdate INT,
    cvv INT,
    billingzipcode INT
  );
`)
      )
  );

app.get('/', (req, res) => {
  // res.sendFile(path.join(`${__dirname}/public/index.html`));
});

app.post('/', (req, res) => {
  console.log(req.body);
});
