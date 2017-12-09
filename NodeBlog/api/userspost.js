var http = require('http');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');
var util = require('util')


var myserver = http.createServer(function (req, res) {
    if (req.method.toLowerCase() == 'get'){
        displayForm(res);
    } else if (req.method.toLowerCase() == 'post'){
        displayForm(res);
    }

});

function displayForm(res) {
    fs.readFile('./views/index.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'Content-Length': data.length
        });
        res.write(data);
        res.end();
    });
}

myserver.listen(8480);
console.log("The server is currently listening on port 8480");

