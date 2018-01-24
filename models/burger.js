// models folder requires my ORM and it contains all the methods I will be using in order to modify our ORM for the use of burgers DB

var orm = require('../config/orm.js');

// running the function of repsonse as a callback --> send it to route.js
var burger = {
    all: function(cb){
        orm.all('burgers',function(res){
            cb(res);
        })
    }
}
module.exports = burger;
