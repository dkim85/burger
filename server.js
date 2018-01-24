// storing the the packages required to run in this app
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.static('/public'));

app.use(bodyParser.urlencoded({
    extended : false
}))

app.use(methodOverride('_method'));
app.engine('handlebars',exphbs({
    dafaultLayout: 'main'
}));
app.set('view engine','handlebars');

// reference routes.js through a variable

var routes = require('./controllers/routes.js');
app.use(routes);

// Testing port
var port = 3000;
app.listen(PORT, function(){
    console.log("App is now listening to: " + PORT);
});