var express = require('express');

var app = express();

app.use('/',express.static(__dirname));
 
app.get('/', function(req, res){
  res.sendfile(__dirname + '/express_pagina_web_dinamica.html');
});
 
app.listen(2000);

console.log("Servidor en el port 2000");
