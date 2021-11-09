
var express = require('express');
var app = express();
var port = 3000;

var datos= [
    {nombre: "Juan", apellido: "Garcia", edad: 30}, 
    {nombre: "Pedro", apellido: "Fernandez", edad: 20},
    {nombre: "Ana", apellido: "Estevez", edad:43},
    {nombre: "Juan Carlos", apellido: "Bruno", edad: 65}];

app.get("/getAll", (req, res) => {
    res.send(datos);
})

app.get("/getPerson", (req, res) => {    
    res.send(datos[parseInt(req.query.id)]);
})

app.get("/getPerson/:desde/:hasta", (req, res) => {
    var resultado = [datos[req.params.desde], datos[req.params.hasta]]    
    res.send(resultado);
})

app.get("/getPersonByHeader", (req, res) => {
    res.send(datos[req.headers.id]);
})

app.post("/setPerson", (req, res) => {
    datos.push({nombre: req.headers.name, 
                apellido: req.headers.surname,
                edad: req.headers.age});
    res.send("OK");
})

app.post("/processAll", (req, res) => {
    var total = 0;
    datos.forEach( item => total = total + item.edad )
    datos = [];
    res.send(JSON.stringify(total));
})

app.listen(port, () => {
    console.log("Server Running in port ", port);
})