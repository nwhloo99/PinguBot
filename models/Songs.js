module.exports = (sequelize, DataTypes) => {
    return sequelize.define('songTags', {
        name : {
            type: DataTypes.STRING,
            unique: true,
        },
        url: DataTypes.TEXT,
    }, {
        timeStamps: false,
    });
}