// Creating a reference to Express & reference to Express Router
var express = require ('express');
var router = express.Router();
var burger = require('../models/burger.js');

// Base route set up
// creating a referene to the burger.js in the below models folder
router.get('/', function(req,res){
    burger.all(function(burger_data){
    console.log(burger_data);
        res.render('index');
    })
})

module.exports = router;