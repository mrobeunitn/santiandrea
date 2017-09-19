
const pg = require('pg');
const async = require('async');

var images = function(albumId,callback){
const results = [];
  // Grab data from http request
  // Get a Postgres client from the connection pool

    var connectionString = {
        host: 'localhost', // server name or IP address;
        port: 5432,
        database: 'andreasanti',
        user: 'postgres',
        password: 'postgres'
    };
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Insert Data
    // SQL Query > Select Data
   /*async.series([
       function(callback){*/
           const query = client.query("SELECT * FROM album JOIN image ON (album.id = image.fk_id)  WHERE image.fk_id =  $1",[albumId]);
        // Stream results back one row at a time
            query.on('row', (row) => {
              results.push(row);
            });
           
       
    // After all data is returned, close connection and return results
            query.on('end', () => {
              done();
              stringa = JSON.stringify(results,null,"    ");
            //  console.log(stringa);
              callback(stringa);
            });
 /*   }
   ],function(err){
       console.log("ripperino");
   });*/
  });
}


//home images

var getIndexImages = function(callback){
const results = [];
  // Grab data from http request
  // Get a Postgres client from the connection pool

    var connectionString = {
        host: 'localhost', // server name or IP address;
        port: 5432,
        database: 'andreasanti',
        user: 'postgres',
        password: 'postgres'
    };
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
           const query = client.query("SELECT * FROM image WHERE index_im = $1",[true]);
        // Stream results back one row at a time
            query.on('row', (row) => {
              results.push(row);
            });
           
       
    // After all data is returned, close connection and return results
            query.on('end', () => {
              done();
              stringa = JSON.stringify(results,null,"    ");
            //  console.log(stringa);
              callback(stringa);
            });
  });
}


exports.getImages = images;

exports.getIndexImages = getIndexImages;



/*var pg = require('pg');
var express = require("express");

var pgp = require('pg-promise')(/*options);

var cn = {
    host: 'localhost', // server name or IP address;
    port: 5432,
    database: 'andreasanti',
    user: 'postgres',
    password: 'postgres'
};

var db  = undefined;
//function for connecting to database

function DBconnection(){
    const options = {

    // pg-promise initialization options...

        connect: (client, dc, isFresh) => {
            const cp = client.connectionParameters;
            console.log("Connected to database:", cp.database);
        }

    };
    var db = pgp(cn); // database instance;
    return db;
}

function closeConnection(){
    pgp.end();
}


//get image by album 
exports.getImages = function (albumid){
var results =[];
    if( db === undefined){
        db = DBconnection();
    }
// select and return user name from id:
/*var qrm = pgp.queryResult;
var results = db.query("SELECT * FROM album JOIN image ON (album.id = image.fk_id)  WHERE image.fk_id =  $1",[albumid], qrm.many);
console.log(results);
return db.many("SELECT * FROM album JOIN image ON (album.id = image.fk_id)  WHERE image.fk_id =  $1",[albumid])
    .then(data =>{
          for( i= 0; i < data.length; i++){
            obj = {id:data[i].id,name:data[i].name,path:data[i].path,description:data[i].description};
            lel = obj.id;
            results.push(obj);
            console.log("lelrip->"+results[i].id);
          }// print user name -> data è un cazzo di array
      return results;
    })
    .catch(error => {
        console.log(error); // print the error;
    })
}*/


