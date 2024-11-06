const LeadCreationService = require("../services/LeadModule/leadCreation.service");
const LeadFetchService = require("../services/LeadModule/leadFetching.service");

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

        const leadGenerate = await LeadFetchService(source, status, assignedTo);

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

module.exports = { LeadCreateController, LeadFetchController };