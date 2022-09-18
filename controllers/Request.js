import Request from "../models/requestModel.js";

export const getAllRequest = async (req, res) => {
    try {
        const request = await Request.findAll();
        res.status(200).json(request);
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log(error.message)
    }
}

export const getRequestById = async (req, res) => {
    try {
        const request = await Request.findAll({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(request[0]);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const createRequest = async (req, res) => {
    try {
        console.log(req.body);
        await Request.create(req.body);
        res.status(200).json({
            message: "Request Created",
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateRequest = async (req, res) => {
    try {
        await Request.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({
            "message": "Request Updated"
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteRequest = async (req, res) => {
    try {
        await Request.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({
            "message": "Request Deleted"
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}