import Address from "../models/addressModel.js";
import User from "../models/userModel.js";

export const validateUserByEmail = async (req, res) => {
    try {
        console.log(req.body);
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if(user){
            if(user.password == req.body.password){
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