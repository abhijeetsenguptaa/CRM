const { DataTypes } = require("sequelize");
const connection = require("../configs/connection");

const UserModel = connection.define('users', {
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    },
    role: {
        type: DataTypes.ENUM('manager', 'developer', 'designer', 'customer'),
        defaultValue: 'customer',
        allowNull: true
    },
    lastLogin: {
        type: DataTypes.DATE,
        allowNull: true
    }
})


module.exports = UserModel;