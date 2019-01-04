const {MongoClient, ObjectID} = require ('mongodb');
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
	if(err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server!');
	const db = client.db('TodoApp');

	/*db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
		console.log(result);
	});*/

	db.collection('Users').deleteMany({name: 'Kevin Wilde'}).then((result) => {
		console.log(result);
	});
/*
	db.collection('Users').findOneAndDelete({_id: new ObjectID("5c2fe04674d8668fb75edbdc")}).then((result) => {
		console.log(result);
	});*/

	/*client.close();*/
});