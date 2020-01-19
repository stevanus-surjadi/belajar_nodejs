const http = require('http');

const routes = require('./routes_ass1');

const server = http.createServer(routes.handler);

server.listen(3000,function() {
    console.log('Listening HTTP server Port 3000....');
})