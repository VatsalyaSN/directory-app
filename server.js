var express = require('express');
var app = express();
var path = require('path');
var compression = require('compression');

const PORT = 7001;

app.get('/ping', function (req, res) {
   res.status(200).json({data: "PONG"});
});
app.use('/bin',express.static(__dirname + '/bin'));
app.use('/src/assets',express.static(__dirname + '/src/assets'));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT, function () {
    console.log('listening on *:' + PORT);
});
