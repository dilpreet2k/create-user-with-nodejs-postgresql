const successResponse = (res, data) => {
    return res.status(200).json(data);
};

const errorResponse = (res, message, statusCode) => {
    return res.status(statusCode).json({ error: message });
};

module.exports = {
    successResponse,
    errorResponse,
};
