const ContactModel = require("../../models/contact.model");

async function ContactDeleteService(id) {
    try {
        const requiredContact = await ContactModel.findByPk(id);

        if (!requiredContact) {
            return {
                status: false,
                message: "Contact as requested not found!"
            }
        }

        await requiredContact.destroy();

        return {
            status: true,
            message: "Contact deleted successfully!"
        }
    } catch (error) {
        console.error("Error deleting Contact:", error.message);
        return {
            status: false,
            message: "An error occurred while deleting the Contact. Please try again later."
        };
    }
};


module.exports = ContactDeleteService;