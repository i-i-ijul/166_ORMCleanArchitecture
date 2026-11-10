const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Komik = sequelize.define("Komik", {
        id: {
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        author: {
            type: DataTypes.STRING,
        }
    });
    return Komik;
};