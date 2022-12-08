var http = require('http');
var fs = require('fs');
http.createServer(function(peticion,respuesta){
    respuesta.writeHead(200,{'Content-Type':'text/plain'});
    switch(peticion.url){
        case '/inicio':
            Pages = "Index.html";
            break;
        default:
            Pages = "Index.html";
            break;
    }
    fs.readFile("./Pages/" + Pages, function(error,datos){
        respuesta.write(datos);
        respuesta.end();
     });
}).listen(3000,'')

console.log("Se esta utilizando el localhost:3000");