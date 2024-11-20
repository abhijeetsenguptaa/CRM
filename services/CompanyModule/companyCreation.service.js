const CompanyModel = require("../../models/company.model");

async function CompanyCreationService(
    name,
    email,
    image,
    fax,
    website,
    source,
    industry,
    address,
    city,
    state,
    country,
    zipCode,
    facebook,
    skype,
    linkedin,
    twitter,
    whatsapp,
    instagram
) {
    try {
        // Check if a company with the same name exists
        const isNameExists = await CompanyModel.findOne({
            where: { name }
        });

        if (isNameExists) {
            return {
                status: false,
                message: "A company with this name already exists!"
            };
        }

        // Check if a company with the same website exists
        const isWebsiteExists = await CompanyModel.findOne({
            where: { website }
        });

        if (isWebsiteExists) {
            return {
                status: false,
                message: "A company with this website already exists!"
            };
        }

        // Validate and generate a slug from the company name
        if (!name || typeof name !== 'string') {
            return {
                status: false,
                message: "Invalid company name provided!"
            };
        }

        const slug = name
            .toLowerCase()                // Convert to lowercase
            .trim()                       // Remove leading and trailing spaces
            .replace(/\s+/g, '-')         // Replace spaces with hyphens
            .replace(/[^\w-]+/g, '');     // Remove non-alphanumeric characters except hyphens

        // Create a new company record
        const createCompany = await CompanyModel.create({
            name,
            slug,
            email,
            image,
            fax,
            website,
            source,
            industry,
            address,
            city,
            state,
            country,
            zipCode,
            facebook,
            skype,
            linkedin,
            twitter,
            whatsapp,
            instagram
        });

        return {
            status: true,
            message: "Company successfully created!",
            data: createCompany
        };
    } catch (error) {
        console.error("Error in company creation:", error.message);
        return {
            status: false,
            message: "An error occurred during company creation. Please try again later."
        };
    }
}

module.exports = CompanyCreationService;
