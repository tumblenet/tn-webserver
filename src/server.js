const http = require('http');

function WebServer(app, port = 3000) {
    var port = process.env.PORT || port;
    //var server = http.Server(app);
    var server = http.createServer(app);
    var onListen = function () {
        console.log("Server listening on port " + port);
    }
    this.server.listen(port, onListen);
}

module.exports = WebServer;