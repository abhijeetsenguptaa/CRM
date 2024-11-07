const { DataTypes } = require("sequelize");
const connection = require("../configs/connection");
const LeadModel = require("./lead.model");

const ContactModel = connection.define("contacts", {
    firstName: {
        type: DataTypes.STRING, 
        allowNull: true 
    },
    lastName: { 
        type: DataTypes.STRING, 
        allowNull: true 
    },
    email: { 
        type: DataTypes.STRING, 
        allowNull: true
    },
    phoneNumber: { 
        type: DataTypes.STRING, 
        allowNull: true 
    },
    leadID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: { 
            model: LeadModel, 
            key: "id" 
        }
    },
    company: { 
        type: DataTypes.STRING, 
        allowNull: true 
    }, // Company the contact works for
    position: { 
        type: DataTypes.STRING, 
        allowNull: true 
    }, // Role within the company
    notes: { 
        type: DataTypes.TEXT, 
        allowNull: true 
    }
});

module.exports = ContactModel;
