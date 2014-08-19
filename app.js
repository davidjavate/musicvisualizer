var express = require('express'),
	ejs = require('ejs'),
	app = express();

app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/some/other/path/public'));
app.use('/javascript', express.static(__dirname + '/public/javascript'));
app.use('/sounds', express.static(__dirname + '/public/sounds'));

app.get('/', function(req, res) {
	res.render('index');
});


app.listen(3000, function() {
	console.log("SERVER STARTED on localhost")
});