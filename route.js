var parse = require('co-body'),
	router = require('koa-router'),
	components = require('./controller/components');
	//users = require('./controller/users');
	


module.exports = function(app) {
	//initialize router
	app.use(router(app));

	app.post('/componentinfo',components.getInfo);

	app.post('/test',function *next(){
		var body=yield parse(this.request);
		this.body=body;
	})

};
