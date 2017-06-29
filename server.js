'use strict'

const express = require('express');
const app = express();
const port = process.env.PORT || 6060;
const bodyParser = require('body-parser');
app.set('port', port);
const request = require('request');

app.use(express.static('client'))


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// MIDDLEWARE (transform stream)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.post('*', (req, res) => {
  let {authCode, serialNum} = req.body
  authCode = authCode.split(/\r?\n/)
  serialNum = serialNum.split(/\r?\n/)

  if (authCode.length === serialNum.length) {

  } else {
    res.status(500).send("Enter 100 of each.")
  }
});

app.listen(port, () =>
  console.log(`Listening on port: ${port}`)
)
