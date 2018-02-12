var connection = require('./connection.js');

// all ~ to create a connection query that selects everything from whatever the table input + callback
var orm = {
  all: function(tableInput, cb){
    connection.query('SELECT * FROM '+tableInput+';', function(err,result){
      if(err) throw err;
      cb(result)
    })
  }
}

module.exports = orm;