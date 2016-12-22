var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.get('/', function(req, res){
  res.sendfile('index.html');
});

app.listen(3000, function () {
  console.log('Server running');
});
