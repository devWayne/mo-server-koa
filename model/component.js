var mysql = require('mysql'),
	config = require('../config');

var connection = mysql.createConnection({
	config.db.host: '127.0.0.1',
	config.db.user: 'root',
	config.db.password: ''
});


function addComponent(info) {
	var insertSQL = "insert into modoc.component(keyword, intro, demo, verify, codelink) values('"+info.keyword+"','"+info.intro+"','"+info.demo+"',"+info.verify+",'"+info.codelink+"') ";
	connection.query(insertSQL, function(err, rows) {
		// connected! (unless `err` is set)
		if(err){
			return {code:500,msg:err}
		}
		else{
			return 200;
		}
	});
	
}

exports.addCpInfo = addCpInfo;