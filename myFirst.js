//Menambahkan modul 'http'
var http = require('http');

//Membuat Server
http.createServer(function(req,res){
	//Memberikan respon 200
	res.writeHead(200,{'Content-Type':'text/html'});
	//Memberikan respon kepada client yang me request
	res.write('Halo Dunia. Selamat datang di' + req.url);
	//Mengakhiri respon
	res.end();
}).listen(8080);