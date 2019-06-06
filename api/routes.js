module.exports = function(app) {
	var crud_commands = require('./crud');
	app.get('/', crud_commands.list_items);

	//Render add.ejs
	app.get('/add', function(req, res) {
		res.render('pages/add')
	})

	//Go back to home
	app.post('/add', crud_commands.add_item);
}