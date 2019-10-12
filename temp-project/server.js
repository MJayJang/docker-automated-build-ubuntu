const express = require('express')

const PORT = 5227;
const HOST = '0.0.0.0';

var app = express();

app.use(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>Hello express</h1>');
});

app.listen(PORT, function(){
    console.log(`Server Running on http://${HOST}:${PORT}`);
})