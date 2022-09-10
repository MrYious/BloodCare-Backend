import { Sequelize } from "sequelize";

const db = new Sequelize(
    'bloodcare',
    'root',
    '',
    {
        host: "localhost",
        dialect: "mysql"
    }
);

export default db;