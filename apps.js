//Declare dependencies here
var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');

//Initialize express engine server
var app = express();
app.set('view engine', 'ejs');

//Initialize encoding
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//Initialize connection to mysql database
var mysql_con = mysql.createConnection({
	host: "localhost",
	user: "user",
	password: "user",
	database: "inventory"
})

//Connect to database and create a table
mysql_con.connect(function(err) {
	if (err) throw err;
	console.log("Looking for TABLE items")
	var createItemsTable = "CREATE TABLE IF NOT EXISTS items(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, name varchar(100) NOT NULL, qty INT NOT NULL, amount DECIMAL(10,2) NOT NULL)";
	mysql_con.query(createItemsTable, function(err2, results, fields){
		if(err2) {
			console.log(err2);
		}
	})
})
global.db = mysql_con;

//Initialize routes
var routes = require('./api/routes');
routes(app);

//Initialize listening to an port
const port = 3000;
app.listen(port);

