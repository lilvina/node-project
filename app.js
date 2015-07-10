var express = require("express");
var app = express();
var _ = require('underscore');


var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

var users = [
	{
		id: 1,
		username: "bob",
		firstname: "Bob",
		lastname: "Jones",
		age: 35
	},
	
	{
		id: 2,
		username: "joe",
		firstname: "Joseph",
		lastname: "Smith",
		age: 23
	},

	{
		id: 3,
		username: "lilvina",
		firstname: "Davina",
		lastname: "Taylor",
		age: 25
	}

];

app.get('/users', function (req, res) {
	res.json(users);
});

app.post("/users", function (req, res) {
	var newUser = req.body;

	users.push(newUser);

	res.json(newUser);
});

app.put("/users/:id", function (req, res) {
	var userId = parseInt(req.params.id);

	var targetUser = _.findWhere(users, {id:userId});
	targetUser.username = req.body.username;
	targetUser.firstname = req.body.firstname;
	targetUser.lastname = req.body.lastname;
	targetUser.age = req.body.age;
	res.json(userId);
});

app.delete("/users/:id", function (req, res) {
	// set the value of the id
	var deleteId = parseInt(req.params.id);
	// find item in `users` array matching the id
	var deleteUser = _.findWhere(users, {id:deleteId});
	// get the index of the found item
	var index = users.indexOf(deleteUser);
	// remove the item at that index, remove 1 item
	users.splice(index, 1);
	// send back deleted object
	res.json(deleteUser);
});



app.listen(3000);