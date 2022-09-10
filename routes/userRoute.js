import {
    createUser,
    deleteUser,
    getAllUsers,
    getUserById,
    updateUser,
} from "../controllers/User.js";

import express from "express";

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;