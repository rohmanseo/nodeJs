var fs = require('fs');

//Membaca Data didalam file
fs.readFile('demo.txt',function(err,data){
	if(err){
		throw err;
	}else{
		console.log(data.toString());
	}
});
