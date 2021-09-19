const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'user', 'pasword', {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    storage: 'database.sqlite',
});

const Songs = require('./models/Songs')(sequelize, Sequelize.DataTypes);

module.exports = { Songs };