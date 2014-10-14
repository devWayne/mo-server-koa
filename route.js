var parse = require('co-body'),
	router = require('koa-router'),
	component = require('./model/component');


module.exports = function(app) {
	//initialize router
	app.use(router(app));

	app.post('/componentinfo', function * next() {
		console.log(this.request.method);
		console.log(this.request.header);

		var body = yield parse(this.request);
		//console.log(body);
		var code=component.addComponent(body)
		this.body = {
			'code': code
		};
	});

};