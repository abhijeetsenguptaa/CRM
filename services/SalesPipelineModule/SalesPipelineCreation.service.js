const SalesPipelineModel = require("../../models/salesPipeline.model");

async function SalesPipelineCreationService(stage, dealValue, status, forecastedCloseDate, accountID, leadID, userID) {
    try {
        const salesReport = await SalesPipelineModel.findOne({ where: { leadID: leadID } });

        if (!salesReport) {
            return {
                status: false,
                message: "Sales Report with this lead is already available!"
            }
        }

        await SalesPipelineModel.create({ stage, dealValue, status, forecastedCloseDate, accountID, leadID, userID });

        return {
            status: true,
            message: "Sales Report with this lead has been created"
        }
    } catch (error) {
        console.error("Error in sales-pipeline creation:", error.message);
        return {
            status: false,
            message: "An error occurred during sales-pipeline creation. Please try again later."
        };
    }
};

module.exports = SalesPipelineCreationService;