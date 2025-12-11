import sequelize from "./tools/db_conn.js";
import Pacco from "./models/Pacco.js";

const main = async () => {
    try {
        console.log("Applicazione avviata correttamente");
        await sequelize.sync({ force: true });
    } catch (e) {
        console.error("Errore durante l'avvio:", e);
    }
};

main();