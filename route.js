var parse = require('co-body'),
	router = require('koa-router'),
	mongoose = require('mongoose');

module.exports = function(app) {
	//initialize router
	app.use(router(app));

	app.post('/ajax', function * next() {
		console.log(this.request.method);
		console.log(this.request.header);

		var body = yield parse(this.request);
		console.log(body);
		this.body = body;
	});

};