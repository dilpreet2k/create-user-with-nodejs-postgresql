const { User } = require('../..//models');
const { successResponse, errorResponse } = require('../helpers/responseHelper');

/**
 * POST API
 * @Body { "username": "aadarsh","password": "abcdefg121#2"} 
 * @Errors  
 * - Username already exists
 * - User registration failed
 * @response { "id": 2, "username": "aadarsh"}
 */

const createUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        const existingUser = await User.findOne({ where: { username } });

        if (existingUser) {
            return errorResponse(res, 'Username already exists', 409);
        }

        const user = await User.create({ username, password });

        return successResponse(res, { id: user.id, username: user.username });
    } catch (error) {
        console.log(error);
        return errorResponse(res, 'User registration failed', 500);
    }
};

module.exports = {
    createUser,
};
