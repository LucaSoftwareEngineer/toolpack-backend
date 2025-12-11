import sequelize from "./tools/db_conn.js";

const main = async () => {
    try {
        console.log("Applicazione avviata correttamente");
    } catch (e) {
        console.error("Errore durante l'avvio:", e);
    }
};

main();