'use strict'
var app = require('./app');
var mongo = require('mongoose');
var urldb = 'mongodb://localhost:27017/rapifood';
var port = process.env.PORT || 8085; 
var ruta = process.env.ROOT_URL || "localhost";

mongo.connect(urldb,function(err,res){
		if(err){
			throw err;
		}else{
			app.listen(port,function(){
				console.log("Api arriba en port: "+ruta+": "+port); //[4]
			});			
		}
});


 