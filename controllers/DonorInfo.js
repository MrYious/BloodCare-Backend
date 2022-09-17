import DonorInfo from "../models/donorInfo.js";

export const getAllDonorInfo = async (req, res) => {
    try {
        const donorInfo = await DonorInfo.findAll();
        res.status(200).json(donorInfo);
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log(error.message)
    }
}

export const getDonorInfoById = async (req, res) => {
    try {
        const address = await DonorInfo.findAll({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(address[0]);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//Register 3
export const createDonorInfo = async (req, res) => {
    try {
        console.log(req.body);
        await DonorInfo.create(req.body);
        res.status(200).json({
            message: "DonorInfo Created",
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateDonorInfo = async (req, res) => {
    try {
        await DonorInfo.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({
            "message": "DonorInfo Updated"
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteDonorInfo = async (req, res) => {
    try {
        await DonorInfo.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({
            "message": "DonorInfo Deleted"
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}