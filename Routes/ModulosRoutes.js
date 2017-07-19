'use strict'
var express = require('express');
var TipoIdentificacionController = require("../Controller/TipoIdentificacion");
var api = express.Router();
var path = require('path'); //[4]

//METODOS RUTAS TIPO IDENTIFICACION
api.post('/tipoidentificacion',TipoIdentificacionController.AddTipoIdentificacion);
api.get('/tipoidentificacion/:id?',TipoIdentificacionController.GetTipoIdentificacion);
api.put('/tipoidentificacion/:id',TipoIdentificacionController.UpdateTipoIdentificacion);
api.delete('/tipoidentificacion/:id',TipoIdentificacionController.DeleteTipoIdentificacion);


//FIN RUTAS TIPO IDENTIFICACION

api.get('/', function(req, res) { //[8]
	res.send("Hola Mundo");
});




module.exports = api;