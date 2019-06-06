module.exports = function(app) {
	var crud_commands = require('./crud');
	app.get('/', crud_commands.list_items);

	//Render add.ejs
	app.get('/add', function(req, res) {
		res.render('pages/add')
	})

	//Go back to home after adding new item
	app.post('/add', crud_commands.add_item);

	//Render edit.ejs
	app.get('/edit/:id', crud_commands.edit_item);

	//Update item
	app.put('/update/:id', crud_commands.update_item);
}