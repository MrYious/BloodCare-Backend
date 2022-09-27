import {
    createRequest,
    createUser,
    getAllDonors,
    getRequestsByID,
    seedUser,
    updateRequest,
    updateUserProfile,
    validateUserByEmail
} from "../controllers/Main.js";

import express from "express";

const router = express.Router();

router.post('/login', validateUserByEmail);
router.post('/register', createUser)
router.patch('/updateProfile', updateUserProfile);
router.get('/donors', getAllDonors);
router.post('/request', createRequest);
router.patch('/request', updateRequest);
router.post('/requestList', getRequestsByID);
router.post('/seedusers', seedUser);

export default router;