const http = require('http');

function WebServer(app, port = 3000) {
    console.log("Starting Web Server created by Tumble1999")
    var port = process.env.PORT || port;
    //var server = http.Server(app);
    var server = http.createServer(app);
    var onListen = function () {
        console.log("Server listening on port " + port);
    }
    server.listen(port, onListen);
    return server;
}

module.exports = WebServer;
