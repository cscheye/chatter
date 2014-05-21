(function(root){
  var C = root.C = (root.C || {});

  var ChatUI = C.ChatUI = function ($el, chat) {
    this.$el = $el;
    this.chat = chat;
  };

  ChatUI.prototype.setUpListeners = function() {
    var chat_ui = this;
    this.$el.on('submit', 'form', function(event){
      event.preventDefault();
      chat_ui.handleMessage(event);
    })

    this.chat.socket.on('msg', function(data) {
        chat_ui.displayMessage(data);
      })
  };

  ChatUI.prototype.handleMessage = function (event) {
    var content = this.getNewMessage(event);
    this.sendMessage(content);
  };

  ChatUI.prototype.getNewMessage = function(event) {
    return $(event.target).serialize().split('=')[1];
  };

  ChatUI.prototype.sendMessage = function (content) {
    this.chat.sendMessage(content);
  };

  ChatUI.prototype.displayMessage = function (data) {
    var log = this.$el.find('#msg-log');
    var content = $('<li>').text(data.text);
    log.append(content)
  };
})(this);