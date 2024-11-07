const CreateContactService = require("../services/ContactModule/CreateContact.service");


async function ContactCreateController(req, res) {
    try {
        const { firstName, lastName, email, phoneNumber, leadID, company, position, notes } = req.body;

        const contactGenerate = await CreateContactService(firstName, lastName, email, phoneNumber, leadID, company, position, notes);

        return res.status(contactGenerate.status ? 200 : 500).json({
            status: contactGenerate.status,
            message: contactGenerate.message,
            data: contactGenerate.data
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            message: 'Internal Server Error',
        });
    }
};

module.exports = { ContactCreateController };