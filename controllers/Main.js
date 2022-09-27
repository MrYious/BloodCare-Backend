import Address from "../models/addressModel.js";
import DonorInfo from "../models/donorInfo.js"
import Request from "../models/requestModel.js"
import User from "../models/userModel.js";
import bcrypt from "bcrypt"
import { faker } from '@faker-js/faker';

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

        if(req.body.accountType === 'Donor'){
            const donor = await DonorInfo.create({donorID: user.id});
            console.log("New Donor ID", donor.id);
            console.log("DonorInfo Created");
        }

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
                    const requests = await Request.findAll({
                        where: {
                            donorID: user.id
                        }
                    });
                    res.status(200).json({
                        user,
                        address,
                        donorInfo,
                        requests: requests,
                    });
                }else{
                    const requests = await Request.findAll({
                        where: {
                            seekerID: user.id
                        }
                    });
                    res.status(200).json({
                        user,
                        address,
                        requests: requests,
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

export const updateUserProfile = async (req, res) => {
    var user = req.body.user;
    var address = req.body.address;
    console.log(user)
    console.log(address)

    delete user.createdAt;
    delete user.updatedAt;
    delete address.createdAt;
    delete address.updatedAt;
    const userData = await User.update(user, {
        where: {
            id: user.id
        }
    });
    const addressData = await Address.update(address, {
        where: {
            id: address.id
        }
    });
    res.status(200).json({
        message: "User Profile Updated"
    });
}

export const getAllDonors = async (req, res) => {
    try {
        const user = await User.findAll({
            where: {
                accountType: "Donor"
            }
        });
        const address = await Address.findAll();
        const donorInfo = await DonorInfo.findAll();
        const requests = await Request.findAll({
            where: {
                status: "Completed"
            }
        });

        res.status(200).json({
            user: user,
            address: address,
            donorInfo: donorInfo,
            requests: requests
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log(error.message)
    }
}

// Create Request
export const createRequest = async (req, res) => {
    try {
        console.log(req.body)
        const exist = await Request.findOne({
            where: {
                donorID: req.body.donorID,
                seekerID: req.body.seekerID
            }
        });
        if(exist.status === 'Pending' || exist.status === 'Active'){
            res.status(400).json({ message: "Failed: Existing request with donor" });
        }else {
            const request = await Request.create(req.body);
            console.log(request);
            res.status(200).json({ message: "Request Created" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getRequestsByID = async (req, res) => {
    try {
        console.log(req.body)

        var requests;
        if(req.body.isDonor){
            requests = await Request.findAll({
                where: {
                    donorID: req.body.id,
                    status: req.body.status
                }
            });
        }else{
            requests = await Request.findAll({
                where: {
                    seekerID: req.body.id,
                    status: req.body.status
                }
            });
        }
        console.log(requests);

        const allUsers = await User.findAll();
        const address = await Address.findAll();
        const donorInfo = await DonorInfo.findAll();

        res.status(200).json({ message: "Request Created" , requests, allUsers, address, donorInfo});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// export const getClosedRequestsByID = async (req, res) => {
//     try {
//         console.log(req.body)

//         var requests;
//         if(req.body.isDonor){
//             requests = await Request.findAll({
//                 where: {
//                     donorID: req.body.id,
//                     status: req.body.status
//                 }
//             });
//         }else{
//             requests = await Request.findAll({
//                 where: {
//                     seekerID: req.body.id,
//                     status: req.body.status
//                 }
//             });
//         }
//         console.log(requests);

//         const allUsers = await User.findAll();
//         const address = await Address.findAll();
//         const donorInfo = await DonorInfo.findAll();

//         res.status(200).json({ message: "Request Created" , requests, allUsers, address, donorInfo});
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// }

export const updateRequest = async (req, res) => {
    try {
        await Request.update(req.body.data, {
            where: {
                id: req.body.id
            }
        });
        res.status(200).json({
            "message": "Request Updated"
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const seedUser = async (req, res) => {
    try {
        const ARRAYS = {
            gender: ["Male", "Female"],
            bloodType: ["A+", "O+", "B+", "AB+", "A-", "O-", "B-", "AB-"],
            accountType: ["Donor", "Looking for Donor"]
        }
        const address = {
            region: 'Region IV-A (CALABARZON)',
            province: 'Laguna',
            city: 'City Of San Pedro',
            barangay: 'Estrella',
            addressLine1: 'Sample Address 1',
        }
        const user = {
            addressID: 1,
            lastname: faker.name.lastName(),
            firstname: faker.name.firstName(),
            middlename: faker.name.lastName(),
            gender: ARRAYS.gender[faker.random.numeric() % 2],
            age: Math.floor(Math.random() * 70) + 1,
            mobileNo: '09' + faker.random.numeric(9),
            email: faker.internet.email(),
            profilePicture: '',
            bloodType: ARRAYS.bloodType[faker.random.numeric() % 8],
            password: bcrypt.hashSync("qwertyuiop", saltRounds),
            accountType: ARRAYS.accountType[faker.random.numeric() % 2],
        }

        res.status(200).json({
            message: "Complete User Created",
            address: address,
            user: user
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
