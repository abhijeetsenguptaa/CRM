const { DataTypes } = require("sequelize");
const connection = require("../configs/connection");
const UserModel = require("./user.model");



const LeadModel = connection.define('leads', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isNumeric: true, // Ensures only numeric values are allowed
        },
    },
    source: {
        type: DataTypes.ENUM('website', 'referral', 'email', 'social media', 'ad', 'other'),
        allowNull: true,
        defaultValue: 'other',
    },
    status: {
        type: DataTypes.ENUM('new', 'contacted', 'qualified', 'lost', 'won'),
        allowNull: true,
        defaultValue: 'new',
    },
    assignedTo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: UserModel,
            key: 'id',
        },
    },
    notes: {
        type: DataTypes.TEXT,
        allowNull: true,
    }
})


LeadModel.belongsTo(UserModel, {
    foreignKey: 'assignedTo',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
})

UserModel.hasMany(LeadModel, {
    foreignKey: 'assignedTo',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
})

module.exports = LeadModel;