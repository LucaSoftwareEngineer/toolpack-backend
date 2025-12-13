import sequelize from "../tools/db_conn.js";
import { DataTypes } from "sequelize";

const Utente = sequelize.define(
    "Utente",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: "ute_id",
        },
        username: {
            type: DataTypes.STRING,
            field: "ute_username"
        },
        password: {
            type: DataTypes.STRING,
            field: "ute_password"
        }
    },
    {
        tableName: "utenti",
    }
);

export default Utente;