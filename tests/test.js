const WebServer = require('../src/server');

var app = function (req,res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
};

WebServer(app); //Run server