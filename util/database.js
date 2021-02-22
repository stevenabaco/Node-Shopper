//KEEP AS EXAMPLE FOR NON MONGOOSE PROJECTS 

//const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;

// let _db;

// const mongoConnect = (cb) => {
// 	MongoClient.connect(
// 		"mongodb+srv://Wizard:yeas4zaix.nerk9NON@cluster0.p7gsm.mongodb.net/shop?retryWrites=true&w=majority"
// 	)
// 		.then(client => {
// 			console.log("Database Connected!");
// 			_db = client.db();
// 			cb();
// 		})
// 		.catch(err => {
// 			console.log(err);
// 			throw err;
// 		});
// };

// const getDb = () => {
// 	if (_db) {
// 		return _db
// 	}
// 	throw 'No Database Found!';
// }

// exports.mongoConnect = mongoConnect;
// exports.getDb = getDb