var io = require('socket.io');

exports.createChat = function(server) {
  io = io.listen(server);

  io.sockets.on('connection', function(socket) {
    socket.emit('msg', { text: 'hello world' })
  })
};


