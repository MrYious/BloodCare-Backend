import Address from "../models/addressModel.js";
import User from "../models/userModel.js";
import bcrypt from "bcrypt"

// TODO
export const validateUserByEmail = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if(user){
            if(bcrypt.compareSync(req.body.password, user.password )){
                const userAddress = await Address.findOne({
                    where: {
                        id: user.addressID
                    }
                });
                res.status(200).json({user, userAddress});
            }else{
                res.status(400).json({ message: "Incorrect email or password" });
            }
        }else{
            res.status(400).json({ message: "Incorrect email or password" });
        }
    } catch (error) {
        res.status(400).json({ message: "Server Request Failed" });
    }
}

export const refresh = async (req, res) => {
    try {
        console.log(req.body);
        const user = await User.findOne({
            where: {
                id: req.body.id
            }
        });
        if(user){
            const userAddress = await Address.findOne({
                where: {
                    id: req.body.addressID
                }
            });
            res.status(200).json({user, userAddress});
        }else{
            res.status(400).json({ message: "Failed 2" });
        }
    } catch (error) {
        res.status(400).json({ message: "Failed 3" });
    }
}