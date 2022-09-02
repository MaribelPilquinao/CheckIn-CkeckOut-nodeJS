const { Record } = require('../models/registrations.model');

const recordExists = async (req, res, next) => {
    try {
        const { id } = req.params;

        const record = await Record.findOne({
            where: { id },
        });

        //Send a message: Registration does not exist
        if (!record) {
            return res.status(404).json({
                status: 'error',
                message: 'record not found',
            });
        }

        // envio la prop
        req.record = record;

        next();
    } catch (error) {
        console.log(error);
    }
};

module.exports = { recordExists };
