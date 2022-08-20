const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('request', {
        ip: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
    }, { timestamps: false });
}