import Address from "../models/addressModel.js";

export const getAllAddresses = async (req, res) => {
    try {
        const address = await Address.findAll();
        console.log("Here")
        res.status(200).json(address);
        console.log("Here")
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log(error.message)
    }
}

export const getAddressById = async (req, res) => {
    try {
        const address = await Address.findAll({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(address[0]);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const createAddress = async (req, res) => {
    try {
        const address = await Address.create(req.body);
        console.log("New Address ID ", address.id);
        res.status(200).json({
            "message": "Address Created",
            id: address.id
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateAddress = async (req, res) => {
    try {
        await Address.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({
            "message": "Address Updated"
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteAddress = async (req, res) => {
    try {
        await Address.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({
            "message": "Address Deleted"
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}