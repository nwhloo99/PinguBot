const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'user', 'pasword', {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    storage: 'database.sqlite',
});

const Songs = require('./models/Songs')(sequelize, Sequelize.DataTypes);

// Can execute node dbInit.js --force or node dbInit.js -f
// To force sync tables, if there are changes to models
// Will empty and remake model tables
const force = process.argv.includes('--force') || process.argv.includes('f');

sequelize.sync({ force }).then(async () => {
    const songs = [
        Songs.upsert({ name: 'Maple1', url: 'https://youtu.be/-FMHYjqC4iA'}),
    ];
    await Promise.all(songs);
    console.log('Database synced');
    sequelize.close();
}).catch(console.error);