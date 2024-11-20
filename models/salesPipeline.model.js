const { DataTypes } = require("sequelize");
const connection = require("../configs/connection");
const LeadModel = require("./lead.model");
const UserModel = require("./user.model");
const AccountModel = require("./account.model");

const SalesPipelineModel = connection.define('salesPipelines', {
    stage: {
        type: DataTypes.ENUM('Prospecting', 'Negotiation', 'Closed'),
        allowNull: false,
        defaultValue: 'Prospecting'
    },
    dealValue: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: '0.00'
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Pending',
    },
    forecastedCloseDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    accountID: {
        type: DataTypes.INTEGER,
        references: {
            model: AccountModel,
            key: 'id',
        },
        allowNull: false,
    },
    leadID: {
        type: DataTypes.INTEGER,
        references: {
            model: LeadModel,
            key: 'id',
        },
        allowNull: false,
    },
    userID: {
        type: DataTypes.INTEGER,
        references: {
            model: UserModel,
            key: 'id',
        },
        allowNull: false,
    },
});

SalesPipelineModel.belongsTo(LeadModel, {
    foreignKey: 'leadID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

LeadModel.hasMany(SalesPipelineModel, {
    foreignKey: 'leadID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});


SalesPipelineModel.belongsTo(UserModel, {
    foreignKey: 'userID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

UserModel.hasMany(SalesPipelineModel, {
    foreignKey: 'userID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

SalesPipelineModel.belongsTo(AccountModel, {
    foreignKey: 'accountID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

AccountModel.hasMany(SalesPipelineModel, {
    foreignKey: 'accountID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

module.exports = SalesPipelineModel;