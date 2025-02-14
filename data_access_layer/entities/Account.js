const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/database.config');

const Account = sequelize.define('account', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: DataTypes.STRING,
    amount: DataTypes.INTEGER,
}, {
    timestamps: false
});

module.exports = Account;