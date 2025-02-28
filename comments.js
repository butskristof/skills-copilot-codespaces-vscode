// Create web server
// Create a web server that listens on port 8080 and logs every request to the console.
// You can use the following code to create a server that listens on port 8080:
// var http = require('http');
// var server = http.createServer(function (request, response) {
//     console.log('Received request');
//     response.end('Hello, World!');
// });
// server.listen(8080);
// Run the code and open your browser to http://localhost:8080. You should see the text Hello, World! in your browser and the message Received request in the console.

var http = require('http');
var server = http.createServer(function (request, response) {
    console.log('Received request');
    response.end('Hello, World!');
});
server.listen(8080);