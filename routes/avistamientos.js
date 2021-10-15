'use strict'

var express = require('express');

var avistamientoController = require('../controllers/AvistamientosController');

var api = express.Router();

api.post ('/registro_avistamientos',avistamientoController.registro_avistamiento);

api.get ('/consultar_avistamientos/:id',avistamientoController.consulta_avistamiento);

api.post ('/consultar_todos_avistamientos/',avistamientoController.consultar_todos_avistamiento);

api.post ('/consultar_todos_nombres_avistamiento/',avistamientoController.consultar_todos_nombres_avistamiento);

api.post ('/editar_avistamientos',avistamientoController.editar_avistamiento);

api.post ('/eliminar_navistamientos',avistamientoController.eliminar_avistamiento);

module.exports = api;