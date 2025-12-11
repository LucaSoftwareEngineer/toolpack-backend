import sequelize from "../tools/db_conn.js";
import { DataTypes } from "sequelize";

const Pacco = sequelize.define(
  "Pacco",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: "pacc_id",
    },
    mittente: {
      type: DataTypes.STRING,
      field: "pacc_mittente",
    },
    destinatario: {
      type: DataTypes.STRING,
      field: "pacc_destinatario",
    },
    mittente_indirizzo: {
      type: DataTypes.STRING,
      field: "pacc_mittente_indirizzo",
    },
    destinatario_indirizzo: {
      type: DataTypes.STRING,
      field: "pacc_destinatario_indirizzo",
    },
    prezzo: {
      type: DataTypes.FLOAT,
      field: "pacc_prezzo",
    },
    spedito: {
      type: DataTypes.BOOLEAN,
      field: "pacc_spedito",
    },
    consegnato: {
      type: DataTypes.BOOLEAN,
      field: "pacc_consegnato",
    },
  },
  {
    tableName: "pacchi",
  }
);

export default Pacco;
