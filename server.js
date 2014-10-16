var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = 3333;

app.use(express.static(__dirname + '/app'));

http.listen(port, function() {
    console.log('listening on *:', port);
});



io.sockets.on('connection', function(socket) {

  socket.on('disconnect', function() {
  });

  socket.on('msg', function(messageFromClient) {
    console.log(messageFromClient);

    socket.emit('another-pipe', 'I got your message: '+messageFromClient);
    socket.broadcast.emit('group-messages', 'for the group: '+messageFromClient);

    // socket.broadcast.emit(
  });

});