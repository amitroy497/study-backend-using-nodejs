const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'studynode', {
	host: 'localhost',
	dialect: 'mysql',
});

module.exports = sequelize;
