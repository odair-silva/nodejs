var http = require('http');
var porta = 3000;
var ip = "localhost";

http.createServer(function(request, response) {
    if(request.url == "/produtos"){
        response.end('<html><body>Produtos</body></html>');
    }else{
        response.end("<html><body>Home da casa do codigo.</body></html>");
    }
}).listen(porta, ip);

console.log("Server running at http://" + ip + ":" + porta + "/");