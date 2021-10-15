'user strict'

const { restart } = require('nodemon');
var Usuario = require('../models/usuario');

const registro_usuario = async function(req, res){

    var data  = req.body;

    var registro = await Usuario.create(data);
    res.status(200).send({message:registro});
}

const consultar_usuario = async function(req, res){
    let data = req.body;
    console.log(data);
    let registro = []; 
    registro = await Usuario.find({email:data.email,password:data.password});


    if(registro == ""){
        res.status(200).send({message:"0"});
    }else{
        res.status(200).send({message:"1"});
    }
}

const editar_usuario = async function(req, res){
    let data = req.body;
    let consulta = Usuario.findById(data);
     res.status(200).send({message:consulta});
}

const eliminar_usuario = async function(req, res){
    let data = req.body;
    let registro = Noticia.findByIdAndUpdate(data);
    res.status(200).send({message:registro});
}

module.exports = {
    registro_usuario,
    consultar_usuario,
    editar_usuario,
    eliminar_usuario
}