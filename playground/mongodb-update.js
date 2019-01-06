const {MongoClient, ObjectID} = require ('mongodb');
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
	if(err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server!');
	const db = client.db('TodoApp');

	/*db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID('5c2fbe5774d8668fb75ed273')
	}, {
		$set: {
			completed: true
		}
	}, {
		returnOriginal : false
	}).then((result) => {
		console.log(result);
	});*/
	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5c2fe23774d8668fb75edc88')
	}, {
		$set: {
			name: "Kevin Ammon Wilde"
		}, 
		$inc: {
			age: 1
		}
	}, 
	{
		returnOriginal : false
	}).then((result) => {
		console.log(result);
	});

	/*client.close();*/
});