import {
    createAddress,
    deleteAddress,
    getAddressById,
    getAllAddresses,
    updateAddress
} from "../controllers/Address.js";

import express from "express";

const router = express.Router();

const TestFunction = async (req, res) => {
    try {
        console.log("Test Success")
        res.json({ message: "Test Success"});
    } catch (error) {
        res.json({ message: "Test Failed", error: error.message });
    }
}
router.get('/test', TestFunction)

router.get('/', getAllAddresses);
router.get('/:id', getAddressById);
router.post('/', createAddress);
router.patch('/:id', updateAddress);
router.delete('/:id', deleteAddress);

export default router;