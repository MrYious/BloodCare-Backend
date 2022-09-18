import Address from "../models/addressModel.js";
import DonorInfo from "../models/donorInfo.js"
import Request from "../models/requestModel.js"
import User from "../models/userModel.js";
import bcrypt from "bcrypt"

const saltRounds = 10;

// REGISTER
export const createUser = async (req, res) => {
    try {
        const checkUser = await User.findOne({
            where: {
                email: req.body.user.email
            }
        });
        if(checkUser){
            res.status(400).json({ message: "Email is already registered" });
        }
        console.log("BODY: ", req.body)

        const address = await Address.create(req.body.address);
        console.log("New Address ID ", address.id);
        console.log("Address Created")

        req.body.user.password = bcrypt.hashSync(req.body.user.password, saltRounds);
        req.body.user.addressID = address.id;
        const user = await User.create(req.body.user);
        console.log("New User ID ", user.id);
        console.log("User Created");

        await DonorInfo.create({donorID: req.body.user.id});
        console.log("DonorInfo Created");

        res.status(200).json({ message: "Complete User Created" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


// LOGIN ?
export const validateUserByEmail = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if(user){
            if(bcrypt.compareSync(req.body.password, user.password )){
                const address = await Address.findOne({
                    where: {
                        id: user.addressID
                    }
                });
                if(user.accountType === "Donor"){
                    const donorInfo = await DonorInfo.findOne({
                        where: {
                            donorID: user.id
                        }
                    });
                    res.status(200).json({
                        user,
                        address,
                        donorInfo
                    });
                }else{
                    res.status(200).json({
                        user,
                        address
                    });
                }
            }else{
                res.status(400).json({ message: "Incorrect email or password" });
            }
        }else{
            res.status(400).json({ message: "Incorrect email or password" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
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