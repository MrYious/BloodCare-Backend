import User from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
    try {
        const user = await User.findAll();
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log(error.message)
    }
}

export const getUserById = async (req, res) => {
    try {
        const user = await User.findAll({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(user[0]);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        console.log("New User ID ", user.id);
        res.status(200).json({
            "message": "User Created"
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateUser = async (req, res) => {
    try {
        await User.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({
            "message": "User Updated"
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteUser = async (req, res) => {
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({
            "message": "User Deleted"
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}