const express = require('express');

// Controllers
const {
    getAllUsers,
    getByIdUser,
    createNewUser,
    updateUser,
    deleteUser,
} = require('../controllers/registrations.controller');

// Middleware

const { recordExists } = require('../middlewares/registrations.middleware');

// Routers
const registrationRouter = express.Router();

registrationRouter.get('/', getAllUsers);

registrationRouter.get('/:id', recordExists, getByIdUser);

registrationRouter.post('/', createNewUser);

registrationRouter.patch('/:id', recordExists, updateUser);

registrationRouter.delete('/:id', recordExists, deleteUser);

module.exports = { registrationRouter };
