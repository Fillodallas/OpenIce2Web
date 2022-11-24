//////////////////// Connect with MDPnP \\\\\\\\\\\\\\\\\\\\\\\\\

var javaPort = 8080;
var javaServer = require('net').createServer();
var WebSocketServer = require('ws').Server
 , wss = new WebSocketServer({port: 90});

var fileData ;
////////////////////Connect with HTML page\\\\\\\\\\\\\\\\\\\\\\

var expressHT = require('express'),
    appHT = expressHT(),
    httpHT = require('http'),
    socketIOHT = require('socket.io'),
    serverHT, ioHT;
///////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//////////////////// Static Files \\\\\\\\\\\\\\\\\\\\\\\\\
appHT.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
    });
    
    
    appHT.use(expressHT.static('public'))
    appHT.use('/css', expressHT.static(__dirname + '/public/css'));
    appHT.use('/js', expressHT.static(__dirname + '/public/js'));
    appHT.use('/img', expressHT.static(__dirname + '/public/img'));

///////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



var firstDataListenner = function (data) {
    fileData = data;
    var msg =data.toString();
    ioHT.emit('data', msg);
    //console.log(msg);
}

 console.log('=====================================================');
 console.log('Node.js/Java Communication Module');
 console.log('=====================================================');

javaServer.on('listening', function () {
   console.log('Server is listening on ' + javaPort);
});

javaServer.on('error', function (e) {
    console.log('Server error: ' + e.code);
});

javaServer.on('close', function () {
   console.log('Server closed');
   console.log('Java ' + clientAddress + ' disconnected');
});

javaServer.on('connection', function (javaSocket) {
    var clientAddress = javaSocket.address().address + ':' + javaSocket.address().port;
    //console.log('Java ' + clientAddress + ' connected');
    javaSocket.on('data', firstDataListenner);

});
 javaServer.listen(javaPort);

 ////////////////////////////// Http Server \\\\\\\\\\\\\\\\\\\\\\\\

serverHT = httpHT.Server(appHT);
serverHT.listen(3030);

ioHT = socketIOHT(serverHT);

///////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
