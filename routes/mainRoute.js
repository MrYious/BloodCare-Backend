import {
    createUser,
    refresh,
    validateUserByEmail
} from "../controllers/Main.js";

import express from "express";

const router = express.Router();

router.post('/login', validateUserByEmail);
router.post('/register', createUser)
router.post('/refresh', refresh);

export default router;