const ContactModel = require("../../models/contact.model");

async function CreateContactService(firstName, lastName, email, phoneNumber, leadID, company, position, notes) {
    try {
        const isContact = await ContactModel.findOne({ where: { phoneNumber: phone } });

        if (!isContact) {
            return {
                status: false,
                message: "Contact Number is already registered!"
            }
        }
        const contactCreation = await ContactModel.create({ firstName, lastName, email, phoneNumber, leadID, company, position, notes })

        return {
            status: true,
            message: "Contact has been created successfully!",
            data: contactCreation
        }
    } catch (error) {
        console.error("Error in contact creation:", error.message);
        return {
            status: false,
            message: "An error occurred during contact creation. Please try again later."
        };
    }
}

module.exports = CreateContactService;