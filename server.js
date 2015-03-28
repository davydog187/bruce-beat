var http = require("http");
var fs = require("fs");
var massover = require("./server/massover");

var BRUCE_BEAT = "./html/bruce-beat.html";

http.createServer(function(request, response) {
    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    response.end(fs.readFileSync(BRUCE_BEAT));
}).listen(8080, "127.0.0.1");

console.log("bruce beat is running, bitches");
massover();
