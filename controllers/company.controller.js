const multer = require('multer');
const CompanyCreationService = require("../services/CompanyModule/companyCreation.service");
const path = require('path');
const fs = require('fs');
const CompanyFetchService = require('../services/CompanyModule/companyFetch.service');
const CompanyDeleteService = require('../services/CompanyModule/companyDelete.service');
const CompanyUpdateService = require('../services/CompanyModule/companyUpdate.service');
const CompanyModel = require('../models/company.model');
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/companies'); // Destination folder
        },
        filename: function (req, file, cb) {
            // Generate a unique filename using date and time
            const currentDate = new Date().toISOString().split('T')[0]; // Current date in 'YYYY-MM-DD'
            const currentTime = new Date().toISOString().split('T')[1].replace(/:/g, '-').split('.')[0]; // Current time with ':' replaced by '-'
            const fileExtension = path.extname(file.originalname); // Extract file extension
            const uniqueKey = `${currentDate}-${currentTime}${fileExtension}`; // Combine date, time, and extension
            cb(null, uniqueKey); // Pass the unique key as the file name
        },
    }),
});
async function CompanyCreateController(req, res) {
    try {
        const { name, email, fax, website, source, industry, address, city, state, country, zipCode, facebook, skype, linkedin, twitter, whatsapp, instagram } = req.body;

        let image = '';

        if (req.file) {
            image = 'uploads/companies/' + req.file.filename;
        }

        const companyGenerate = await CompanyCreationService(name, email, image, fax, website, source, industry, address, city, state, country, zipCode, facebook, skype, linkedin, twitter, whatsapp, instagram);

        return res.status(companyGenerate.status ? 200 : 500).json({
            status: companyGenerate.status,
            message: companyGenerate.message,
            data: companyGenerate.data
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            message: 'Internal Server Error',
        });
    }
};


async function CompanyFetchController(req, res) {
    try {
        const { id, name, slug } = req.query;

        const companyFetch = await CompanyFetchService(id, name, slug);

        return res.status(companyFetch.status ? 200 : 500).json({
            status: companyFetch.status,
            message: companyFetch.message,
            data: companyFetch.data
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            message: 'Internal Server Error',
        });
    }
};


async function CompanyDeleteController(req, res) {
    try {
        const id = req.params.id;

        const companyDelete = await CompanyDeleteService(id);

        return res.status(companyDelete.status ? 200 : 500).json({
            status: companyDelete.status,
            message: companyDelete.message
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            message: 'Internal Server Error',
        });
    }
};

async function CompanyUpdateController(req, res) {
    try {
        const id = req.params.id;

        let company = await CompanyModel.findByPk(id);

        let image = company.image;

        // Remove the old image if it exists
        if (req.file) {
            if(image){
                const oldImagePath = path.join(__dirname, '..', image); // Assuming image is stored in the 'uploads/companies' folder
                fs.unlink(oldImagePath, (err) => {
                    if (err) {
                        console.error('Failed to delete old image:', err);
                    }
                });
            }
            image = 'uploads/companies/' + req.file.filename;
        }else {
            image = company.image;
        }

        const { name, email, fax, website, source, industry, address, city, state, country, zipCode, facebook, skype, linkedin, twitter, whatsapp, instagram } = req.body;

        const companyUpdate = await CompanyUpdateService(id, name, email, image, fax, website, source, industry, address, city, state, country, zipCode, facebook, skype, linkedin, twitter, whatsapp, instagram);

        return res.status(companyUpdate.status ? 200 : 500).json({
            status: companyUpdate.status,
            message: companyUpdate.message
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            message: 'Internal Server Error',
        });
    }
};

module.exports = { upload, CompanyCreateController, CompanyFetchController, CompanyDeleteController, CompanyUpdateController };