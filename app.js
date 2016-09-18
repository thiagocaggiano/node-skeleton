var express = require('express'),
    app = express(),
    load = require('express-load'),
    server = require('http').createServer(app),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    moment = require('moment'),
    mysql = require('mysql');
    
//set diretorio de view
app.set('views', __dirname + '/views');

//seta o tipo de view
app.set('view engine', 'ejs');

//seta statica publica
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Load Controllers / Models / Views
load('library')
    .then('models')
    .then('controllers')
    .then('routes')
    .into(app);


var server = app.listen(process.env.PORT || 8080, function() {
  console.log('Node Skeleton Server is running and listening on port ' + server.address().port);
});