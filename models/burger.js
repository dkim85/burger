// requires orm and employ all the methods in order to modify our ORM 

var orm = require('../config/orm.js');
// be careful when typing cd instead of cb~ next time
var burger = {
  all: function(cb){
    orm.all('burgers',function(res){
      cb(res);
    })
  },
// update function
  update: function(id,cb){
    orm.update('burgers',id,cb);
  },
// create function
  create: function (name,cb){
    orm.create('burgers',name,cb);
  }
}

module.exports = burger;