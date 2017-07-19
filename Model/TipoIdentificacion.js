'use strict'
var mongo = require('mongoose');
var Schema = mongo.Schema;

var TipoIdentificacionSchema = Schema({
	Nombre: String
});

module.exports = mongo.model('TipoIdentificacion',TipoIdentificacionSchema);