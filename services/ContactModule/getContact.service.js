const ContactModel = require("../../models/contact.model");

async function GetContactService(id, leadID, company) {
    try {
        // Build a dynamic query object
        const queryOptions = {
            where: {}
        };

        // Add conditions based on provided parameters
        if (id) queryOptions.where.id = id;
        if (leadID) queryOptions.where.leadId = leadID;
        if (company) queryOptions.where.company = company;

        // Fetch contacts based on the query options
        const contacts = await ContactModel.findAll(queryOptions);

        // Return contacts or a message if none found
        if (contacts.length > 0) {
            return {
                status: true,
                data: contacts
            };
        } else {
            return {
                status: false,
                message: "No contacts found with the specified criteria."
            };
        }

    } catch (error) {
        console.error("Error in contact fetching:", error.message);
        return {
            status: false,
            message: "An error occurred during contact fetching. Please try again later."
        };
    }
}

module.exports = GetContactService;
