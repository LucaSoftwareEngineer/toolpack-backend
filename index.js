import sequelize from "./tools/db_conn.js";
import Pacco from "./models/Pacco.js";
import { registraPacco } from "./api/registra_pacco.js";
import express from "express";

const main = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("Database connesso e sincronizzato con il provider orm");
  } catch (e) {
    console.error("Errore durante l'avvio:", e);
  }
};
main();

const app = express();
app.use(express.json());

app.post("/pacco/registra", registraPacco);

app.listen(3000, () => {
  console.log("Server in ascolto sulla porta 3000");
});
export default app;
