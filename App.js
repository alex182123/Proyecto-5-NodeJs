var http = require('http');

http.createServer(function(request,respuesta){
    respuesta.writeHead(200,{'Content-Type':'text/plain'});
    respuesta.write("Hola Perro");
    respuesta.end();
}).listen(3000,'')
console.log("Se esta utilizando el localhost:3000");

