'use strict'
var raiz = "/tipoidentificacion"
var express = require("express"); //[1]
var bodyparser = require("body-parser"); //[2]
var app = express(); //[3]
var api = require("./Routes/ModulosRoutes");
var path = require('path'); //[4]
app.use(bodyparser.urlencoded({extended:false}));//[6]
app.use(bodyparser.json()); //[7]
app.use(raiz,api);

module.exports=app; //[10]

/*
::Tabla de Comentarios::

[1] : Importacion del Modulo Express
[2] : Importacion del modulo Body-parser
[3] : Instancia del modulo Express
[4] : Obtencion de la ruta pach del Directorio de Trabajo
[5] : Usamos el Modulo Body parser para darle formato a las peticiones via HTTP
[6] : Todos las variables recibidas en peticiones HTTP, son convetidas a objeto JSON
[7] : Definimos Ruta base de respuesta del Servidor
[8] : Mostramos al Usuario la pantalla de 'Api Running'
[9] : importamos el modulo app, para usarlo en el Server
*/