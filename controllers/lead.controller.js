const LeadCreationService = require("../services/LeadModule/leadCreation.service");
const LeadDeleteService = require("../services/LeadModule/leadDelete.service");
const LeadFetchService = require("../services/LeadModule/leadFetching.service");
const LeadUpdateService = require("../services/LeadModule/leadUpdate.service");

async function LeadCreateController(req, res) {
    try {
        const { firstName, lastName, email, phoneNumber, source, status, assignedTo, notes } = req.body;

        const leadGenerate = await LeadCreationService(firstName, lastName, email, phoneNumber, source, status, assignedTo, notes);

        return res.status(leadGenerate.status ? 200 : 500).json({
            status: leadGenerate.status,
            message: leadGenerate.message,
            data: leadGenerate.data
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            message: 'Internal Server Error',
        });
    }
};

async function LeadFetchController(req, res) {
    try {
        const { source, status, assignedTo } = req.query;

        const leadFetch = await LeadFetchService(source, status, assignedTo);

        return res.status(leadFetch.status ? 200 : 500).json({
            status: leadFetch.status,
            message: leadFetch.message,
            data: leadFetch.data
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            message: 'Internal Server Error',
        });
    }
};

async function LeadUpdateController(req, res) {
    try {
        const id = req.params.id;
        const { firstName, lastName, email, phoneNumber, source, status, assignedTo, notes } = req.body;

        const leadUpdate = await LeadUpdateService(id, firstName, lastName, email, phoneNumber, source, status, assignedTo, notes);

        return res.status(leadUpdate.status ? 200 : 404).json({
            status: leadUpdate.status,
            message: leadUpdate.message,
            data: leadUpdate.data
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            message: 'Internal Server Error',
        });
    }
};

async function LeadDeleteController(req, res) {
    try {
        const id = req.params.id;

        const leadDelete = await LeadDeleteService(id);

        return res.status(leadDelete.status ? 200 : 404).json({
            status: leadDelete.status,
            message: leadDelete.message
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            message: 'Internal Server Error',
        });
    }
};

module.exports = { LeadCreateController, LeadFetchController, LeadUpdateController, LeadDeleteController };