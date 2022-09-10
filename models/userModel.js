import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const User = db.define('user_tbl',{
    addressID:{
        type: DataTypes.INTEGER
    },
    lastname:{
        type: DataTypes.STRING
    },
    firstname:{
        type: DataTypes.STRING
    },
    middlename:{
        type: DataTypes.STRING
    },
    gender:{
        type: DataTypes.STRING
    },
    age:{
        type: DataTypes.INTEGER
    },
    mobileNo:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    profilePicture:{
        type: DataTypes.STRING,
    },
    bloodType:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    accountType:{
        type: DataTypes.STRING
    },
},{
    freezeTableName: true
});

export default User;