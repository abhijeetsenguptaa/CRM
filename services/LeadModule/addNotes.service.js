const LeadModel = require("../../models/lead.model");

async function AddNotesService(id, notes) {
    try {
        const requiredLead = await LeadModel.findByPk(id);

        if(!requiredLead){
            return {
                status: false,
                message: "Lead as requested not found!"
            }
        }

        requiredLead.notes = notes;
        await requiredLead.save();

        return {
            status : true,
            message : "Notes has been added to the Lead!"
        }
    } catch (error) {
        console.error("Error adding notes to lead:", error.message);
        return {
            status: false,
            message: "An error occurred while adding notes to the lead. Please try again later."
        };
    }
};

module.exports = AddNotesService