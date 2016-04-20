var express = require('express')
var cc = require('config-multipaas')

var app = express();

app.get('/', function(req, res) {        
    res.send(req.headers);
});

var config = cc().add({ PORT: 3000 });

app.listen(config.get('PORT'), config.get('IP'));