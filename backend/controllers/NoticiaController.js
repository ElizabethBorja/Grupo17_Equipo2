'user strict'

const { restart } = require('nodemon');
var Noticia = require('../models/noticia');

const registro_noticia = async function(req, res){
    let data = req.body;
    let registro = Noticia.create(data);
    res.status(200).send({message:registro});
}


const consulta_noticia = async function(req, res){
    let id = req.params.id;
    console.log(id);
    let noticia = await Noticia.findById({_id:id});

    console.log(noticia);

    if(noticia == null ){
        res.status(200).send({message:"No existe informacion del avistamiento"});
    }else{
        res.status(200).send({message:noticia});
    }
     
}

const consulta_todas_noticias = async function(req, res){

    let noticias = []; 

    noticias = await Noticia.find();

    console.log(noticias);

    if(noticias.length == 0 ){
        res.status(200).send({message:"No existe informacion del avistamiento"});
    }else{
        res.status(200).send({message:noticias});
    }
     
}

const consultar_todos_titulares = async function(req, res){

    let noticias = []; 

    noticias = await Noticia.find({}).select({"_id":1,"titulo":1,"foto_portada":1,"fecha_creacion":1,"autor":1});

    console.log(noticias);

    if(noticias.length == 0 ){
        res.status(200).send({message:"No existe informacion del avistamiento"});
    }else{
        res.status(200).send({message:noticias});
    }
     
}


const editar_noticia = async function(req, res){
    let data = req.body;
    let registro = Noticia.findByIdAndUpdate(data);
    res.status(200).send({message:registro});
}

const eliminar_noticia = async function(req, res){
    let data = req.body;
    let registro = Noticia.findByIdAndDelete(data);
    res.status(200).send({message:registro});
}

module.exports = {
    registro_noticia,
    consulta_noticia,
    editar_noticia,
    eliminar_noticia,
    consulta_todas_noticias,
    consultar_todos_titulares,
}