var express = require('express');
var fs = require('fs');
const path = require('path');
const { dirname } = require('path');

//const pug = require('pug');
var app = express();
const moongose = require('mongoose');

let Datos

const password = '7122022'
const dbname = 'CasasProyecto'
const uri = 'mongodb+srv://JostinDB:7122022@cluster0.ypk2vbo.mongodb.net/CasasProyecto?retryWrites=true&w=majority'
function Connectar(){
    try{
        /* module.exports = () => */ moongose.connect(uri)
        console.log('CONNECTION SUCESSFUL')
    }catch(err){
        console.error(err)
    }
}
async function Consultar(){
    try{
        /* module.exports = () => */await moongose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true})
        const { Schema } = moongose
        const ClientesSchema = new Schema({
            Nombre:{type:String},
            Apellidos:{type:String},
            Presupuestos:{type:String}
        });
        moongose.models = {}
        const ClientesModel = moongose.model('Clientes',ClientesSchema)
        const TodosClientes = await ClientesModel.find().then()
        Datos = TodosClientes
        console.log(TodosClientes)
        console.log('CONNECTION SUCESSFUL')
    }catch(err){
        console.error(err)
    }
}

async function Ingresar(){
    try{
        
    }catch(error1){
        console.log(error1)
    }
}
app.set("view engine","pug");
app.set("views",path.join(__dirname,"views"));
//Consultar()
app.get('/',function(peticion,respuesta){
    //Consultar()
    //Connectar()
    respuesta.render('index.pug');
});
app.get('/index.pug',function(peticion,respuesta){
    respuesta.render('index.pug',{});
});
app.get('/clientes.pug',function(peticion,respuesta,next){
        respuesta.render('clientes.pug')
});
app.get('/registrarCliente',function(peticion,respuesta,next){
    moongose.connect(uri)
    const { Schema } = moongose
    const ClientesBD = new moongose.Schema({
        Nombre:{type:String},
        Apellidos:{type:String},
        Presupuestos:{type:String}
    });
    moongose.models = {}
    var NuevoCliente = moongose.model('Clientes',ClientesBD)
    var Cliente = new NuevoCliente({
        Nombre: peticion.query.txtNombre,
        Apellidos: peticion.query.txtApellidos,
        Presupuestos: peticion.query.txtPresupuesto
    });
    Cliente.save();
    respuesta.render('clientes.pug')
});
app.get('/verclientes.pug',function(peticion,respuesta,next){
    Consultar()
    respuesta.render('verclientes.pug',{Datos1: Datos});
});

app.listen('3000',function(){
    console.log('Se esta ejecutando el localhost 3000')
});

//mongodb+srv://JostinDB:<password>@cluster0.ypk2vbo.mongodb.net/?retryWrites=true&w=majority
//UsuarioMongo: JostinDB
//ContraMongo: 7122022