const LeadModel = require("../../models/lead.model");

async function LeadDeleteService(id) {
    try {
        const requiredLead = await LeadModel.findByPk(id);

        if (!requiredLead) {
            return {
                status: false,
                message: "Lead as requested not found!"
            }
        }

        await requiredLead.destroy();

        return {
            status: true,
            message: "Lead deleted successfully!"
        }
    } catch (error) {
        console.error("Error deleting lead:", error.message);
        return {
            status: false,
            message: "An error occurred while deleting the lead. Please try again later."
        };
    }
};


module.exports = LeadDeleteService;