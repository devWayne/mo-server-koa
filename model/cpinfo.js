var mysql = require('mysql');
var connection = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: ''
});


function addCpInfo(info) {
	var insertSQL = "insert into modoc.component(keyword, intro, demo, verify, codelink) values('"+info.keyword+"','"+info.intro+"','"+info.demo+"',"+info.verify+",'"+info.codelink+"') ";
	connection.query(insertSQL, function(err, rows) {
		// connected! (unless `err` is set)
		console.log(err);
	});
	return 200;
}

exports.addCpInfo = addCpInfo;