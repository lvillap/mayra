const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const uuidv4 = require('uuid/v4');

const app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const dataFile = './data/data.json';
let data: any = {};

fs.readFile(dataFile, 'utf8', function readFileCallback(err, readData) {
  if (err) {
    console.log(err);
  } else {
    data = JSON.parse(readData); //now it an object
  }
});

app.get('/api/tasks', (req, res) => {
  res.send(data.tasks);
});

app.post('/api/tasks', (req, res) => {
  const taskData = req.body;
  taskData.id = uuidv4();
  data.tasks.push(taskData);
  const content = JSON.stringify(data);
  fs.writeFile(dataFile, content, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Data was saved!");
  });
});

app.get('/test', (req, res) => {
  res.send(`
    <html>
      <body>
        <form action="api/tasks" method="post">
          <label>Name: </label><input type="text" name="name">
          <input type="submit" value="Enviar">
        </form>
        <div>${JSON.stringify(data)}</div>
      </body>
    </html>
  `);
})

app.listen(3000, function () {
  console.log('Mayra typescript server listening on port 3000!');
});
