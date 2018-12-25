console.log('Server started');

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname+'/www/share.html');
});

io.on('connection', function (socket) {
    console.log("hey");
});

io.on('image', function (data) {
    console.log(data);
})

http.listen(1337, function () {
    console.log('listening on *:1337');
});