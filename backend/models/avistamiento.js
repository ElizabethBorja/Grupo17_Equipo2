'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AvistamientoSchema = Schema({
    nombre: {type:String, required: true},
    especie: {type:String, required: true},
    localidad: {type:String, required: true},
    fecha: {type:String, required: true},
    imagen: {type:String, required: false},
});

module.exports = mongoose.model('avistamiento', AvistamientoSchema);