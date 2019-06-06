exports.list_items = function(req, res) {
	var sql_com_list = "SELECT * FROM items";
	db.query(sql_com_list, function(err, result, fields){
		console.log(result);
	})
	res.render('pages/home')
}

exports.add_item = function(req, res) {
	var sql_com_add = "INSERT INTO items (name, qty, amount) VALUES (?, ?, ?)";
	db.query(sql_com_add, [req.body.name, req.body.qty, req.body.amount], function(err, result, fields) {
		if(err) throw err;
		console.log("1 record inserted into items");
	})
}

exports.update_item = function(req, res) {
	var sql_com_update = "UPDATE items SET name=?, qty=?, amount=? WHERE id=?";
	db.query(sql_com_update, [req.body.name, req.body.qty, req.body.amount, req.body.id], function(err, result, fields) {
		if(err) throw err;
		console.log("1 record updated in items");
	})
}

exports.delete_item = function(req, res) {
	var sql_com_delete = "DELETE FROM items WHERE id=?";
	db.query(sql_com_delete, [req.body.id], function(err, result, fields) {
		if(err) throw err;
		console.log("1 record deleted in items");
	})
}