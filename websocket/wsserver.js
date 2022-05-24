var WebSocketServer = require("ws").Server;
var fs = require("fs");

var wss = new WebSocketServer({port: 8100});

console.log("Server started...");
var clientlist = [];
function randomID() {
    return Math.floor(Math.random() * 1000);
}

wss.on('connection', function (client) {

    if (clientlist.length < 2 ) {
        client.send("en attente de joueur")
    }

    client.id = randomID();
    clientlist.push(client.id);
    console.log("Browser connected online...")

    console.log(clientlist)

    //ws.id = Math.random();

    client.on("message", function (str) {
        //console.log(str)
        let message = str.toString();
        let obj = JSON.parse(message)

        client.send(JSON.stringify(obj))
    })


    client.on("close", function () {
        console.log("Browser gone.")
        clientlist.pop(client.id);
    })
});