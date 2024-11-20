const CompanyModel = require("../../models/company.model");
const fs = require('fs');
const path = require('path');

async function CompanyDeleteService(id) {
    try {
        const companyData = await CompanyModel.findByPk(id);

        if (!companyData) {
            return {
                status: false,
                message: "No company found!"
            }
        }

        companyData.destroy();

        return {
            status: true,
            message: "Company has been deleted successfully!"
        }
    } catch (error) {
        console.error("Error in company deletion:", error.message);
        return {
            status: false,
            message: "An error occurred during company deletion. Please try again later."
        };
    }
};


module.exports = CompanyDeleteService;