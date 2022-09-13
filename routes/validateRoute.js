import {
    refresh,
    validateUserByEmail
} from "../controllers/Validate.js";

import express from "express";

const router = express.Router();

router.post('/login', validateUserByEmail);
router.post('/refresh', refresh);

export default router;