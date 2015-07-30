var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var mongoose = require('mongoose');
var googleTranslate = require('google-translate')('AIzaSyBl_SYfvJWC-31-7yzI06wD32e7085tBek');
var Input = require('./models/form.js')

mongoose.connect = ('mongodb://localhost/lingo');


var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

// app.get('/trans', function(req, res){
// 	googleTranslate.translate(word, languageStart, languageEnd, function(err, translation){
// 		console.log(translation)
// 	})
// 	res.send('/')
// })

app.post('/trans', function(req,res){
	console.log(req.body)

	googleTranslate.translate(req.body.word, req.body.languageEnd, function(err, translation){
		res.send(translation.translatedText)
	})
		
	
	// input.save(function(){
	
	// res.render('');
});

app.get('/', indexController.index);

var server = app.listen(3000, function() {
	console.log('Express server listening on port ' + server.address().port);
});
