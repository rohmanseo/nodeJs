//Menambahkan model Http
var http = require('http');
//Menamahkan Modul File Server
var fs = require('fs');
//Membuat server
http.createServer(function(req,res){
	//Membaca file dari folder
	fs.readFile('demo.txt',function(err,data){
		//Memberikan respon 200 OK
		res.writeHead(200,{'Content-Type' : 'text/html'});
		//Menulis text yang berada di dalam file yang dibuka
		res.write(data);
		//Mengakhiri respon
		res.end();
	});
}).listen(8080);