const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (cb) => {
	MongoClient.connect(
		"mongodb+srv://Wizard:yeas4zaix.nerk9NON@cluster0.nzoh4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
	)
		.then(client => {
			console.log("Database Connected!");
			cb(client)
		})
		.catch(err => console.log(err));
};

module.exports = mongoConnect;