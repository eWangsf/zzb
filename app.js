// var http = require('http');
// var url = require('url');
// var fs = require('fs');
// var route = require('./route');

// http.createServer(function (request, response) {
//     var pathname = url.parse(request.url).pathname;
//     // console.log(pathname);
//     route(pathname);
//     // console.log(request);
//     // fs.readFile('test.txt', function (err, data) {
//     //     if(err) {
//     //         response.writeHead(404, {'Content-Type': 'text/html'});
//     //     } else {
//     //         response.writeHead(200, {'Content-Type': 'text/html'});
//     //         response.write(data.toString());
//     //     }
//     // })
// }).listen(1111);

// console.log('Server running at http://localhost:1111/... ')

var express = require('express');
var app = express();

app.set('view engine', 'html');
app.use(express.static('static'));
app.listen(1111);


// pages
app.get('/zzb', function (req, res) {
   res.sendfile("./views/index.html");
});

app.get('/zzb/login', function (req, res) {
   res.sendfile("./views/login.html");
});



// var server = app.listen(1111, function () {
//   var host = server.address();
//   var port = server.address().port;
//   console.log(host);
//   console.log("Server running at http://localhost:%s...", port);
// });




