var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
mongoose = require('mongoose');
var app = express();

app.use(express.static(path.join(__dirname, '/client')));
app.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, function(){
  console.log("listening");
})
