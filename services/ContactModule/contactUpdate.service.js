const ContactModel = require("../../models/contact.model");

async function ContactUpdateService(id, firstName, lastName, email, phoneNumber, leadID, company, position, notes) {
    try {
        // Find the contact by ID
        const requiredContact = await ContactModel.findByPk(id);

        // If contact not found, return an error message
        if (!requiredContact) {
            return {
                status: false,
                message: "Contact not found!"
            };
        }

        // Update fields if they are provided
        if (firstName) requiredContact.firstName = firstName;
        if (lastName) requiredContact.lastName = lastName;
        if (email) requiredContact.email = email;
        if (phoneNumber) requiredContact.phoneNumber = phoneNumber;
        if (leadID) requiredContact.leadId = leadID;
        if (company) requiredContact.company = company;
        if (position) requiredContact.position = position;
        if (notes) requiredContact.notes = notes;

        // Save the updated contact information
        await requiredContact.save();

        return {
            status: true,
            message: "Contact updated successfully!",
            data: requiredContact
        };

    } catch (error) {
        console.error("Error updating contact:", error.message);
        return {
            status: false,
            message: "An error occurred while updating the contact. Please try again later."
        };
    }
}

module.exports = ContactUpdateService;
