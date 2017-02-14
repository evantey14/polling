var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var router = express.Router();
var db = require('./models/db');



var dbModel = new db();
/**
  Setting up the database and creating table.
*/
dbModel.setupDb();
app.use(bodyParser.json());
app.use(require('./controllers'));


http.listen(3000, function(){
  console.log('listening on port 3000');
});