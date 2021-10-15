'use strict'

var express = require('express');

var noticiaController = require('../controllers/NoticiaController');

var api = express.Router();

api.post ('/registro_noticia',noticiaController.registro_noticia);

api.get ('/consulta_noticia/:id',noticiaController.consulta_noticia);

api.post ('/consulta_todas_noticias/',noticiaController.consulta_todas_noticias);

api.post ('/consultar_todos_titulares/',noticiaController.consultar_todos_titulares);

api.post ('/editar_noticia',noticiaController.editar_noticia);

api.post ('/eliminar_noticia',noticiaController.eliminar_noticia);

module.exports = api;