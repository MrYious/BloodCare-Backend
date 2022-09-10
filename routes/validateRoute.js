import express from "express";
import {
    validateUserByEmail,
} from "../controllers/Validate.js";

const router = express.Router();

router.post('/login', validateUserByEmail);

export default router;