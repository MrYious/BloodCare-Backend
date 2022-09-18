import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Request = db.define('request_tbl',{
    donorID:{
        type: DataTypes.INTEGER
    },
    seekerID:{
        type: DataTypes.INTEGER
    },
    status:{
        type: DataTypes.INTEGER
    },
    message:{
        type: DataTypes.STRING
    },
    rating:{
        type: DataTypes.INTEGER
    },
    comment:{
        type: DataTypes.INTEGER
    }
},{
    freezeTableName: true
});

export default Request;