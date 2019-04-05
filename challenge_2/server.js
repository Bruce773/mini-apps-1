const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.urlencoded());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) =>
  res.sendFile(path.join(`${__dirname}/client/index.html`))
);

app.listen(port, () => console.log(`App listening on port ${port}!`));

app.post('/', (req, res) => {
  // res.send(JSON.parse(req.body.jsonData));
  var dataString = JSON.stringify(req.body.jsonData)
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
  var columns = Object.keys(JSON.parse(req.body.jsonData));
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
    // data: () => {
    //   Object.keys(JSON.parse(req.body.jsonData)).forEach((item) => {
    //     console.log(JSON.parse(req.body.jsonData).item);
    //   });
    // },
  });
});
