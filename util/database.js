const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-shopper", "root", "MySQLp@ss", {
	dialect: "mysql",
	host: "localhost",
});

module.exports = sequelize;
