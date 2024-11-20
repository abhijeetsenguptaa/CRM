
const { DataTypes } = require("sequelize");
const connection = require("../configs/connection");

const CompanyModel = connection.define("companies", {
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    fax: {
        type: DataTypes.STRING,
        allowNull: true
    },
    website: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true
    },
    isStar: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    source: {
        type: DataTypes.STRING,
        allowNull: true
    },
    industry: {
        type: DataTypes.STRING,
        allowNull: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true
    },
    state: {
        type: DataTypes.STRING,
        allowNull: true
    },
    country: {
        type: DataTypes.STRING,
        allowNull: true
    },
    zipCode: {
        type: DataTypes.STRING,
        allowNull: true
    },
    facebook: {
        type: DataTypes.STRING,
        allowNull: true
    },
    skype: {
        type: DataTypes.STRING,
        allowNull: true
    },
    linkedin: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    twitter: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    whatsapp: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    instagram: {
        type: DataTypes.TEXT,
        allowNull: true
    }
});

module.exports = CompanyModel;