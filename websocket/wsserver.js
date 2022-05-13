var WebSocketServer = require("ws").Server;
var fs = require("fs");

var ws = new WebSocketServer({port: 8100});

console.log("Server started...");

ws.on('connection', function (ws) {
    console.log("Browser connected online...")

    ws.on("message", function (str) {
        console.log(str)
        let test = str.toString();
        let ob = JSON.parse(test)

        console.log(ob)
        ws.send(JSON.stringify(ob))
    })

    ws.on("close", function () {
        console.log("Browser gone.")
    })
});