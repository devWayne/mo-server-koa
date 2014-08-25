var koa = require('koa'),
	router = require('koa-router'),
	logger = require('koa-logger'),
	mongoose = require('mongoose');
	app = koa();

app.use(logger());
var route = new router();
route.get('/', function* next() {
	  console.log(this.params);
  // => [ category: 'programming', title: 'how-to-node' ]
});
app.listen(3000);