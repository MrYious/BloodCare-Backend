import {
    createRequest,
    deleteRequest,
    getAllRequest,
    getRequestById,
    updateRequest
} from "../controllers/Request.js";

import express from "express";

const router = express.Router();

router.get('/', getAllRequest);
router.get('/:id', getRequestById);
router.post('/', createRequest);
router.patch('/:id', updateRequest);
router.delete('/:id', deleteRequest);

export default router;