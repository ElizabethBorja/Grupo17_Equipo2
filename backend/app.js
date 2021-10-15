'use strict'

var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose =  require('mongoose');
const bodyParser = require('body-parser');
var port = process.env.PORT || 4201;

var usuario_route = require('./routes/usuario');
var noticia_route = require('./routes/noticia');
var avistamientos_route = require('./routes/avistamientos');


mongoose.connect('mongodb://127.0.0.1:27017/proyect_ranas',(err, response) => {

        if(err){
            console.log(err);
            
        }else{
            
            app.listen(port, function(){
                console.log('Servidor corriendo '+port);
                
            });
        }
});

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyParser.json({limit:'50mb',extended:true}))

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*'); 
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
    next();
});

app.use('/api',usuario_route);
app.use('/api',noticia_route);
app.use('/api',avistamientos_route);

module.exports = app;
