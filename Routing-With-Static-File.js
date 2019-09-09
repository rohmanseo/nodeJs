var http = require('http'),
	fs = require('fs');
const PORT = 8080;

function serveStaticFile(res,path,contentType,responCode){
	//Jika respon kode tidak diisi, maka isi dengan default 200 OK
	if(!responCode) responCode = 200;

	fs.readFile(__dirname + '/'+ path,function(err,data){
	//Jika gagal membuka file maka beri respon 500 Internal Error
		if(err){
			res.writeHead(500,{'Content-Type' : 'text/plain'});
			res.end('500 - Internal Error');
		}else{
			res.writeHead(responCode,{'Content-Type' : contentType});
			res.end(data);
		}
	});

}
http.createServer(function(req,res){
		var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
	switch(path){
		//Arahkan ke homepage
		case '':
				serveStaticFile(res,'public/homepage.html','text/html');
				break;
		//Mengarahkan ke halaman about
		case '/about' :
				serveStaticFile(res,'public/about.html','text/html');
				break;
		//Jika halaman tidak ada beri respon 404
		default :
				serveStaticFile(res,'public/404.html','text/html',404);
				break;
	}
}).listen(PORT);