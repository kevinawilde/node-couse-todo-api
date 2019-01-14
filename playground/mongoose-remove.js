const {ObjectID} = require ('mongodb')

const{mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');
const {Todo} = require('./../server/models/todo');

var id = '5c32c03768b0da16bc9e5fc6';

/*Todo.remove({}).then((result) => {
	console.log(result);
});
*/
/*Todo.findOneAndRemove*/
// Todo.findByIdAndRemove//

Todo.findByIdAndRemove('5c3bea12a74d1c1bd4fb65fb').then((todo) => {
	console.log(todo);
});