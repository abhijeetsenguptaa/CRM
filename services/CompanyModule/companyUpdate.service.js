const CompanyModel = require("../../models/company.model");

async function CompanyUpdateService(id, name, email, image, fax, website, source, industry, address, city, state, country, zipCode, facebook, skype, linkedin, twitter, whatsapp, instagram
) {
    try {
        const requiredCompany = await CompanyModel.findByPk(id);

        if (!requiredCompany) {
            return {
                status: false,
                message: "Company not found!"
            }
        }

         // Update fields if they are provided
         if (name) requiredCompany.name = name;
         if (image) requiredCompany.image = image;
         if (email) requiredCompany.email = email;
         if (fax) requiredCompany.fax = fax;
         if (website) requiredCompany.website = website;
         if (source) requiredCompany.source = source;
         if (industry) requiredCompany.industry = industry;
         if (address) requiredCompany.address = address;
         if (city) requiredCompany.city = city;
         if (state) requiredCompany.state = state;
         if (country) requiredCompany.country = country;
         if (zipCode) requiredCompany.zipCode = zipCode;
         if (facebook) requiredCompany.facebook = facebook;
         if (skype) requiredCompany.skype = skype;
         if (linkedin) requiredCompany.linkedin = linkedin;
         if (twitter) requiredCompany.twitter = twitter;
         if (whatsapp) requiredCompany.twitter = whatsapp;
         if (instagram) requiredCompany.twitter = instagram;


         // Save the updated contact information
        await requiredCompany.save();

        return {
            status: true,
            message: "Company updated successfully!",
            data: requiredCompany
        };

    } catch (error) {
        console.error("Error in company updating:", error.message);
        return {
            status: false,
            message: "An error occurred during company updating. Please try again later."
        };
    }
};


module.exports = CompanyUpdateService;