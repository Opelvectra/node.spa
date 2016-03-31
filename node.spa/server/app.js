var express, app, server;

module.exports = function(expressFramework){
	express = expressFramework;
	return {
		startServer: function(onStart){
			constructor(onStart);
			return server;
		}, 
		stopServer: function(onStop){
			server.close();
		},
		getServer: function(){
			return server;
		}
	}
};

function constructor(onStart){
	app = express();
	app.disable('x-powered-by'); // removes ExpressJS header
	setViewEngine();
	setStaicFolders();
	setControllers();
	setPort(onStart);
	console.log('It works!');
}

function setPort(onStart){
	app.set('port', process.env.PORT || 8002);
	server = app.listen(app.get('port'), function(){
		console.log('Express started press Ctrl-C, plz');
		if(typeof onStart === 'function') {
			onStart();
		}
	});
}

function setControllers() {

	app.get('/*', function (req, res, next) {
	  console.log('Returns base template for all GET requests');
	  res.sendFile(__dirname + '/public/index.html');
	});
}

function setStaicFolders(){
	app.use('/s', express['static']('public'));
}

function setViewEngine(){
	var	handlebars = require('express-handlebars').create();
	app.engine('handlebars', handlebars.engine);
	app.set('view engine', 'handlebars');
	app.set('views', __dirname + '/views/');
}