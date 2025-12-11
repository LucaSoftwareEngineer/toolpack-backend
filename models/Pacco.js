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
    mittenteIndirizzo: {
      type: DataTypes.STRING,
      field: "pacc_mittente_indirizzo",
    },
    destinatarioIndirizzo: {
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
    dataSpedizione: {
      type: DataTypes.DATE,
      field: "pacc_data_spezione",
    },
    dataConsegna: {
      type: DataTypes.DATE,
      field: "pacc_data_consegna",
    },
  },
  {
    tableName: "pacchi",
  }
);

export default Pacco;
