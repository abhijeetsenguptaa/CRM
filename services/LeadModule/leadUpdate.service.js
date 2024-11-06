const LeadModel = require("../../models/lead.model");

async function LeadUpdateService(id) {
    try {
        const requiredLead = await LeadModel.findByPk(id);

        if (!requiredLead) {
            return {
                status : false,
                message : "Lead not Found!"
            }
        }
    } catch (error) {

    }
}

module.exports = LeadUpdateService;