const ContactUpdateService = require("../services/ContactModule/contactUpdate.service");
const CreateContactService = require("../services/ContactModule/CreateContact.service");
const GetContactService = require("../services/ContactModule/getContact.service");


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

async function ContactFetchController(req, res) {
    try {
        const { id, leadID, company } = req.query;

        const contactFetch = await GetContactService(id, leadID, company);

        return res.status(contactFetch.status ? 200 : 500).json({
            status: contactFetch.status,
            message: contactFetch.message,
            data: contactFetch.data
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            message: 'Internal Server Error',
        });
    }
};

async function ContactUpdateController(req, res) {
    try {
        const id = req.params.id;
        const { firstName, lastName, email, phoneNumber, leadID, company, position, notes } = req.query;

        const contactUpdate = await ContactUpdateService(id, firstName, lastName, email, phoneNumber, leadID, company, position, notes);

        return res.status(contactUpdate.status ? 200 : 500).json({
            status: contactUpdate.status,
            message: contactUpdate.message,
            data: contactUpdate.data
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            message: 'Internal Server Error',
        });
    }
};

module.exports = { ContactCreateController, ContactFetchController, ContactUpdateController };