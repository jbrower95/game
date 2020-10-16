import express from "express";
import path from "path";

const app = express()

app.use('/js', express.static(__dirname + '/dist'));
app.use('/', express.static(__dirname + '/static'));

app.listen(3000, () =>
  console.log('Visit http://127.0.0.1:3000')
);
