const AccountCreationService = require("../services/AccountModule/accountCreation.service");
const AccountDeleteService = require("../services/AccountModule/accountDelete.service");
const AccountFetchService = require("../services/AccountModule/accountFetch.service");
const AccountUpdateService = require("../services/AccountModule/accountUpdate.service");


async function AccountCreateController(req, res) {
    try {
        const { name, industry, website, phone, email, address, city, state, country, notes } = req.body;

        const AccountGenerate = await AccountCreationService(name, industry, website, phone, email, address, city, state, country, notes);

        return res.status(AccountGenerate.status ? 200 : 500).json({
            status: AccountGenerate.status,
            message: AccountGenerate.message,
            data: AccountGenerate.data
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            message: 'Internal Server Error',
        });
    }
};

async function AccountFetchController(req, res) {
    try {
        const { id, name, email } = req.query;

        const AccountFetch = await AccountFetchService(id, name, email);

        return res.status(AccountFetch.status ? 200 : 500).json({
            status: AccountFetch.status,
            message: AccountFetch.message,
            data: AccountFetch.data
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            message: 'Internal Server Error',
        });
    }
};

async function AccountUpdateController(req, res) {
    try {
        const id = req.params.id;
        const { name, industry, website, phone, email, address, city, state, country, notes } = req.query;

        const AccountUpdate = await AccountUpdateService(id, name, industry, website, phone, email, address, city, state, country, notes);

        return res.status(AccountUpdate.status ? 200 : 500).json({
            status: AccountUpdate.status,
            message: AccountUpdate.message,
            data: AccountUpdate.data
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            message: 'Internal Server Error',
        });
    }
};

async function AccountDeleteController(req, res) {
    try {
        const id = req.params.id;

        const AccountDelete = await AccountDeleteService(id);

        return res.status(AccountDelete.status ? 200 : 500).json({
            status: AccountDelete.status,
            message: AccountDelete.message,
            data: AccountDelete.data
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            message: 'Internal Server Error',
        });
    }
};

module.exports = { AccountCreateController, AccountFetchController, AccountUpdateController, AccountDeleteController };