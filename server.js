var koa = require('koa'),
	logger = require('koa-logger'),
	config = require('config'),
	route = require('./route');

var app = module.exports = koa();

//logger
app.use(logger());

//route
route(app);

app.listen(config.port);