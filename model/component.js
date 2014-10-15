var mysql = require('mysql'),
	config = require('../config');

var connection = mysql.createConnection({
	host: config.db.host,
	user: config.db.user,
	password: config.db.password
});


function addComponent(info) {
	var insertSQL = "insert into modoc.component SET ?";
	connection.query(insertSQL,info,function(err, rows) {
		// connected! (unless `err` is set)
		if(err){
			return {code:500,msg:err.code}
		}
		else{
			return 200;
		}
	});
	
}

connection.on('error', function(err) {
  console.log(err.code); // 'ER_BAD_DB_ERROR'
});


exports.addComponent = addComponent;