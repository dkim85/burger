// this is going to house all my sequel connetion data
// keep port # in mind next time
var mysql = require("mysql");
// var connection = mysql.createConnection({
//   host:"localhost",
//   port: 8889, 
//   user:"root",
//   password:"root",
//   database: "burgers_db"
// });

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 8889,
    password: "root",
    database: "burgers_db"
  });
};

connection.connect(function(err){
  if(err)throw err;
  console.log("connected as id: "+connection.threadid);
});

module.exports = connection;