var http = require('http');
//Port yang digunakan
const PORT = 8080;

http.createServer(function(req,res){
	var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
	switch(path){
		//Arahkan ke homepage
		case '':
				res.writeHead(200,{'Content-Type' : 'text/html'});
				res.end('Homepage');
				break;
		//Mengarahkan ke halaman about
		case '/about' :
				res.writeHead(200,{'Content-Type' : 'text/html'});
				res.end('About');
				break;
		//Jika halaman tidak ada beri respon 404
		default :
				res.writeHead(404,{'Content-Type' : 'text/html'});
				res.end('Not Found');
				break;
	}
}).listen(PORT);