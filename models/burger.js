// requires orm and employ all the methods in order to modify our ORM 

var orm = require('../config/orm.js');
// be careful when typing cd instead of cb~ next time
var burger = {
  all: function(cb){
    orm.all('burgers',function(res){
      cb(res);
    })
  }
}

module.exports = burger;