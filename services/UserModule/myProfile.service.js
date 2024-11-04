const UserModel = require("../../models/user.model");

async function MyProfileService(userID) {
    try {
        // Fetch user details by primary key (userID)
        const userDetails = await UserModel.findByPk(userID);

        // Check if the user exists
        if (!userDetails) {
            return {
                status: false,
                message: "User not found!"
            };
        }

        // Return the user details if found
        return {
            status: true,
            message: "User details retrieved successfully",
            data: userDetails
        };
    } catch (error) {
        console.error("Error in fetching user profile:", error.message);
        return {
            status: false,
            message: "An error occurred while fetching the user profile. Please try again later."
        };
    }
}

module.exports = MyProfileService;
