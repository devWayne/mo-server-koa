var koa = require('koa'),
	router = require('koa-router'),
	logger = require('koa-logger'),
	parse = require('co-body');
mongoose = require('mongoose');
app = koa();
app.use(router(app));
app.use(logger());

app.post('/ajax', function* next() {
	console.log(this.request.method);
	console.log(this.request.header);
	
	var body = yield parse(this.request);
	console.log(body);
	this.body = body;
});
app.listen(3000);