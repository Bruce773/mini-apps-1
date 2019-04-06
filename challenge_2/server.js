const express = require('express');
const path = require('path');
const multer = require('multer');
var upload = multer({ dest: `${path.join(`${__dirname}/uploads/`)}` });
var fs = require('fs');
var Promise = require('bluebird');
var readFile = Promise.promisify(fs.readFile);
const app = express();
const port = 3000;

app.use(express.urlencoded());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) =>
  res.sendFile(path.join(`${__dirname}/client/index.html`))
);

app.listen(port, () => console.log(`App listening on port ${port}!`));

app.post('/', upload.single('jsonData'), (req, res) => {
  readFile(`${path.join(`${__dirname}/uploads/${req.file.filename}`)}`).then(
    (data) => {
      console.log('!!!!', JSON.parse(data));
      var fileContent = JSON.parse(data);
      var dataString = JSON.stringify(fileContent)
        .split('\\')
        .join(' ')
        .split('"')
        .join(' ')
        .split('{')
        .join(' ')
        .split('}')
        .join(' ')
        .split('[')
        .join(' ')
        .split(']')
        .join(' ')
        .split(':')
        .join(' ');
      var columns = Object.keys(JSON.parse(data));
      var counter = 0;

      columns.forEach((column) => {
        dataString = dataString.split(`${column}`).join(' ');
      });

      dataString = dataString
        .split(' ')
        .map((item, index) => {
          if (item === ',') {
            counter++;
            if (counter === columns.length) {
              counter = 0;
              return (dataString[index + 1] = '\n');
            }
          }
          return item;
        })
        .join('');

      console.log(dataString);

      res.render('results', {
        columns: columns,
        data: dataString,
      });
    }
  );
});
