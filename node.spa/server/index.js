var express = require('express'), 
	appConfig = require('./app-config.json'),
	app = require('./app')(express);

app.startServer(appConfig.dev);