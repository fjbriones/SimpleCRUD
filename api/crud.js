exports.list_items = function(req, res) {
	var sql_com_list = "SELECT * FROM items";
	db.query(sql_com_list, function(err, result, fields){
		console.log(result);
	})
	res.render('pages/home')
}