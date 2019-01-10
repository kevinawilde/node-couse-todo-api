const {ObjectID} = require ('mongodb')

const{mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');
const {Todo} = require('./../server/models/todo');

var id = '5c32c03768b0da16bc9e5fc6';

/*if (!ObjectID.isValid(id)) {
	console.log('ID not valid');
}*/
/*Todo.find({
	_id: id
}).then((todos) => {
	console.log('Todos', todos);
});

Todo.findOne({
	_id: id
}).then((todo) => {

	console.log('Todo', todo);
});*/

/*Todo.findById(id).then((todo) => {
	if (!todo){
		return console.log('ID not found');
	}
	console.log('Todo By ID', todo);
}).catch((e) => console.log(e));*/
User.findById(id).then((user) => {
	if (!user){
		return console.log('ID not found');
	}
	console.log('User By ID', user);
}).catch((e) => console.log('Cannot find ID'));