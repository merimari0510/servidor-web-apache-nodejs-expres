var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.sendfile(__dirname + '/express_pagina_web_zenzilla.html');
});

app.use('/',express.static(__dirname));
 

app.listen(8001);

console.log("Servidor en el port 8001");
