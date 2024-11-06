const LeadModel = require("../../models/lead.model");

async function LeadUpdateService(id, firstName, lastName, email, phoneNumber, source, status, assignedTo, notes) {
    try {
        // Find the lead by primary key (ID)
        const requiredLead = await LeadModel.findByPk(id);

        if (!requiredLead) {
            return {
                status: false,
                message: "Lead not found!"
            };
        }

        // Update fields if provided
        if (firstName) requiredLead.firstName = firstName;
        if (lastName) requiredLead.lastName = lastName;
        if (email) requiredLead.email = email;
        if (phoneNumber) requiredLead.phoneNumber = phoneNumber;
        if (source) requiredLead.source = source;
        if (status) requiredLead.status = status;
        if (assignedTo) requiredLead.assignedTo = assignedTo;
        if (notes) requiredLead.notes = notes;

        // Save the updated lead
        await requiredLead.save();

        return {
            status: true,
            message: "Lead updated successfully.",
            data: requiredLead
        };
    } catch (error) {
        console.error("Error updating lead:", error.message);
        return {
            status: false,
            message: "An error occurred while updating the lead. Please try again later."
        };
    }
}

module.exports = LeadUpdateService;
