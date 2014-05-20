var http = require('http');
var path = require('path');
var mime = require('mime');
var router = require('./router')
var chat_server = require('./lib/chat_server');

var server = http.createServer(router);
server.listen(8888);

console.log("server is up and running!");

chat_server.createChat(server);
