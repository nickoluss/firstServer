// Require/import the HTTP module
var http = require("http");
// Define a port to listen for incoming requests
var PORT1 = 7000;
var PORT2 = 7500;
// Create a generic function to handle requests and responses
function handleRequest1(request, responce) {
    responce.end("your beautifull and you know it" + request.url);
}
function handleRequest2(request, responce){
  // Send the below string to the client when the user visits the PORT URL
    responce.end("but you smell like shit" + request.url);
}
// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

// Start our server so that it can begin listening to client requests.

server1.listen(PORT1, function() {
  // Log (server-side) when our server has started

    console.log("Server listening on: http://localhost:" + PORT1);
});
server2.listen(PORT2, function() {
  // Log (server-side) when our server has started

    console.log("Server listening on: http://localhost:" + PORT2);
});