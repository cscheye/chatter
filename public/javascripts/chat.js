(function(root) {
  var C = root.C = (root.C || {})

  var Chat = C.Chat = function (socket) {
    this.socket = socket;
  }

  Chat.prototype.sendMessage = function (message) {
    this.socket.emit('msg', { text: message })
  };
})(this);