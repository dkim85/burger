// importing data from connection.js
var connection = require('./connection.js');

// collecting data from databse & at the same time will help me to create and add new data into the database...
// creating a callback to pass the result into 
var orm = {
    all: function(tableInput, cb){
        connection.query('SELECT * FROM '+tableInput+';', function(err,result){
            if(err) throw err;
            cb(result)
        })
    }
}

module.export = orm;