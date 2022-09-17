import {
    createDonorInfo,
    deleteDonorInfo,
    getAllDonorInfo,
    getDonorInfoById,
    updateDonorInfo
} from "../controllers/DonorInfo.js";

import express from "express";

const router = express.Router();

router.get('/', getAllDonorInfo);
router.get('/:id', getDonorInfoById);
router.post('/', createDonorInfo);
router.patch('/:id', updateDonorInfo);
router.delete('/:id', deleteDonorInfo);

export default router;