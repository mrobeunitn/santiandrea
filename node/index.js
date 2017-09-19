var http = require('http');
//general lib
var express = require('express');
//parse URL
var url = require('url');
//inspect variables
var util = require('util');
var bind = require('bind');
var path = require('path');
var bodyParser = require('body-parser')
//database 
var outputIndexFormat = require("./scripts/format_output.js");
var DBmanager = require("./db_handler.js");
//instantiate express
var app = express(); 


app.use(bodyParser.urlencoded({ extended: false }));
//listen in a specific port
app.set('port', (process.env.PORT || 1337));

app.use(express.static(path.join(__dirname, '/public')));
//create a server
app.get('/', function(request, response) 
{
    var results;
    var outputFormatted;
    DBmanager.getIndexImages(function(data){
        outputIndexFormat.formatOutput(data,function(data1){
            bind.toFile('./index.tpl', {
                html_formatted:data1
            }, function(data) {
                response.writeHead(200);
                response.end(data);
                });
            });
    });
});

//create a server
app.post('/', function(request, response) 
{
	var album = request.body.album;
    console.log(album);
    var results;
    var outputFormatted;
    DBmanager.getImages(album,function(data){
        outputIndexFormat.formatAlbumOutput(data,function(data1){
            bind.toFile('./album.tpl', {
                html_formatted:data1
            }, function(data) {
                response.writeHead(200);
                response.end(data);
                });
            });
    });
});
 
//listen in a specific port
app.listen(1337, '127.0.0.1');
 
//check status
console.log(""+process.env.PORT);