// I bring the model
const { Record } = require('../models/registrations.model');

const getAllUsers = async (req, res) => {
    try {
        const record = await Record.findAll();

        res.status(200).json({
            status: 'success',
            data: {
                record,
            },
        });
    } catch (error) {
        console.log(error);
    }
};

const getByIdUser = async (req, res) => {
    try {
        //From the middleware
        const { record } = req;

        res.status(200).json({
            status: 'success',
            data: {
                record,
            },
        });
    } catch (error) {
        console.log(error);
    }
};

const createNewUser = async (req, res) => {
    try {
        const { entranceTime } = req.body;

        const newRegistrationUser = await Record.create({
            entranceTime,
        });

        res.status(201).json({
            status: 'success',
            data: { newRegistrationUser },
        });
    } catch (error) {
        console.log(error);
    }
};

const updateUser = async (req, res) => {
    try {
        const { exitTime } = req.body;

        const { record } = req; //From the middleware

        if (record.status === 'CANCELLED') {
            return res.status(400).json({
                status: 'error',
                message: 'Record cancelled',
            });
        } else if (record.status === 'OUT') {
            return res.status(400).json({
                status: 'error',
                message: 'Record is already out',
            });
        } else {
            await record.update({
                exitTime,
                status: 'OUT',
            });

            res.status(200).json({
                status: 'success',
                data: {
                    record,
                },
            });
        }
    } catch (error) {
        console.log(error);
    }
};

const deleteUser = async (req, res) => {
    try {
        const { record } = req; //From the middleware

        await record.update({ status: 'CANCELLED' });

        res.status(204).json({ status: 'success' });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllUsers,
    getByIdUser,
    createNewUser,
    updateUser,
    deleteUser,
};
