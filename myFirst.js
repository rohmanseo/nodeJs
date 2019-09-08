//Menambahkan modul 'http'
var http = require('http');

//Membuat sebuah server dengan port 8080
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type': 'text/html'});
	res.end("Hello World.");
}).listen(8080);