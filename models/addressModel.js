import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Address = db.define('address_tbl',{
    region:{
        type: DataTypes.STRING
    },
    province:{
        type: DataTypes.STRING
    },
    city:{
        type: DataTypes.STRING
    },
    barangay:{
        type: DataTypes.STRING
    },
    addressLine1:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});

export default Address;