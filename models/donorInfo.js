import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const DonorInfo = db.define('donorinfo_tbl',{
    donorID:{
        type: DataTypes.INTEGER
    },
    donations:{
        type: DataTypes.INTEGER
    },
    avgRating:{
        type: DataTypes.INTEGER
    }
},{
    freezeTableName: true
});

export default DonorInfo;