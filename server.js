var koa = require('koa'),
	logger = require('koa-logger'),
	route = require('./route');
	
var app = module.exports = koa();

app.use(logger());
route(app);

app.listen(3000);