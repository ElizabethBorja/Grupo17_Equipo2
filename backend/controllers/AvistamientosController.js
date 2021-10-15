'user strict'

const { restart } = require('nodemon');
var Avistamiento = require('../models/avistamiento');

const registro_avistamiento = async function(req, res){
    let data = req.body;
    let registro = Avistamiento.create(data);
    res.status(200).send({message:registro});
}

const consulta_avistamiento = async function(req, res){
    let id = req.params.id;
    console.log(id);
    let avistamientoReg = await Avistamiento.findById({_id:id});

    console.log(avistamientoReg);

    if(avistamientoReg == null ){
        res.status(200).send({message:"No existe informacion del avistamiento"});
    }else{
        res.status(200).send({message:avistamientoReg});
    }
     
}

const consultar_todos_avistamiento = async function(req, res){

    let avistamientoReg = []; 

    avistamientoReg = await Avistamiento.find();

    console.log(avistamientoReg);

    if(avistamientoReg.length == 0 ){
        res.status(200).send({message:"No existe informacion del avistamiento"});
    }else{
        res.status(200).send({message:avistamientoReg});
    }
     
}

const consultar_todos_nombres_avistamiento = async function(req, res){

    let avistamientoReg = []; 

    avistamientoReg = await Avistamiento.find({}).select('nombre');

    console.log(avistamientoReg);

    if(avistamientoReg.length == 0 ){
        res.status(200).send({message:"No existe informacion del avistamiento"});
    }else{
        res.status(200).send({message:avistamientoReg});
    }
     
}

const editar_avistamiento = async function(req, res){
    let data = req.body;
    let registro = Avistamiento.findByIdAndUpdate(data);
    res.status(200).send({message:registro});
}

const eliminar_avistamiento = async function(req, res){
    let data = req.body;
    let registro = Avistamiento.findByIdAndDelete(data);
    res.status(200).send({message:registro});
}

module.exports = {
    registro_avistamiento,
    consulta_avistamiento,
    editar_avistamiento,
    eliminar_avistamiento,
    consultar_todos_avistamiento,
    consultar_todos_nombres_avistamiento,
}