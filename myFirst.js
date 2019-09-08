//Menambahkan modul 'http'
var http = require('http');

//Membuat Server
http.createServer(function(req,res){
	//Memberikan respon kepada client yang me request
	res.write('Halo Dunia.');
	//Mengakhiri respon
	res.end();
}).listen(8080);