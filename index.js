import sequelize from "./tools/db_conn.js";
import Pacco from "./models/Pacco.js";
import { registraPacco } from "./api/registra_pacco.js";
import { impostaSpeditoPacco } from "./api/imposta_spedito_pacco.js";
import express from "express";
import { impostaConsegnatoPacco } from "./api/impasta_consegnato_pacco.js";

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
app.put("/pacco/spedito", impostaSpeditoPacco);
app.put("/pacco/consegnato", impostaConsegnatoPacco);

app.listen(3000, () => {
  console.log("Server in ascolto sulla porta 3000");
});
export default app;
