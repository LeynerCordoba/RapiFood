'use strict'
var TipoIdentificacion = require('../Model/TipoIdentificacion');

function AddTipoIdentificacion(req,res){	
	var parametros = req.body;
	var Identificacion = new TipoIdentificacion();

	if(parametros.Nombre != ''){
		Identificacion.Nombre = parametros.Nombre;
		Identificacion.save(function(err,IdentificacionStored){
			if(err){
				res.status(500).send({Error: "Error al Guardar el Tipo de Identificacion"});
			}else{
				res.status(200).send({Mensage: "Tipo de Indentificacion Guardada Satisfactoriamente"});
			}
		});
	}else{
		res.status(500).send({error: "El campo Nombre, es Obligatorio"});
	}
}



function GetTipoIdentificacion(req,res){	
	var id = req.params.id;

	if(id){
		TipoIdentificacion.findById(id,function(err,Identificacion){

			if(err){
				res.status(500).send({Error: err});
			}

			if(!Identificacion){
				res.status(404).send({Mensage: "No existen el tipo de identificacion"});
			}

			
			res.status(200).send({Identificacion});

		});

	}else{

		TipoIdentificacion.find({}).sort('Nombre').exec(function(err,IdentificacionStored){

			if(err){
				res.status(500).send({Error: err});
			}

			if(!IdentificacionStored){
				res.status(404).send({Mensage: "No existen Tipos de identificacion"});
			}

			
			res.status(200).send({IdentificacionStored});
			
		});
	}	
}


function UpdateTipoIdentificacion(req,res){	
	var id = req.params.id;
	var update = req.body;

	if(id){
		TipoIdentificacion.findByIdAndUpdate(id,update,function(err,IdentificacionUpdate){

			if(err){
				res.status(500).send({Error: err});
			}

			if(!IdentificacionUpdate){
				res.status(404).send({Mensage: "No existen el tipo de identificacion"});
			}

			
			res.status(200).send({Message: "Actualizado Satisfactoriamente"});

		});

	}else{
		res.status(500).send({Mensage: "Debe especificar el Id a Modificar"});
	}
}


function DeleteTipoIdentificacion(req,res){	
	var id = req.params.id;

	if(id){
		TipoIdentificacion.findById(id,function(err,Identificacion){

			if(err){
				res.status(500).send({Error: err});
			}

			if(!Identificacion){
				res.status(404).send({Mensage: "No existen el tipo de identificacion"});
			}else{

				TipoIdentificacion.remove(function(err){

					if(err){
						res.status(500).send({message:"Error al eliminar el tipo de identificacion"});
					}else{
						res.status(200).send({message:"Tipo de Identificacion eliminada satisfactoriamente"});
					}
				});
			}

		});
	}else{
			res.status(404).send({Mensage: "Debe especificar el Id a Eliminar"});			
	
	}	
}

module.exports = {
AddTipoIdentificacion,
GetTipoIdentificacion,
UpdateTipoIdentificacion,
DeleteTipoIdentificacion
}