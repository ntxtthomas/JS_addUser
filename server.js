var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(require, response){
	response.render('index');
})

app.use(bodyParser.urlencoded({extended: false}));

app.post('/results', function(require, response){
response.render('results', require.body);
	
})

app.listen(6789, function() {
	console.log('Listening is port 6789');
})