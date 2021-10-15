'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NoticiaSchema = Schema({
    titulo: {type:String, required: true},
    resumen: {type:String, required: false},
    contenido: {type:String, required: true},
    foto_portada: {type:String, required: true},
    autor: {type:String, required: false},
    sitio_publicacion: {type:String, required: false},
    fecha_creacion: {type:String, required: true},
});

module.exports = mongoose.model('noticia', NoticiaSchema);