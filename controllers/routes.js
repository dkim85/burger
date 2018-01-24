// Creating a reference to Express & reference to Express Router
var express = require ('express');
var router = express.Router();

// Base route set up
router.get('/', function(req,res){
    res.render('index');
})

module.exports = router;