import Pacco from "../models/Pacco.js";

export const impostaSpeditoPacco = async (req, res) => {
  const statoPaccoData = req.body;

  if (!statoPaccoData.id) {
    res.status(400).json({ message: "l'id del pacco è obbligatorio" });
  }

  if (statoPaccoData.spedito == null || statoPaccoData.spedito == undefined) {
    res.status(400).json({ message: "lo stato di spedizione è obbligatorio" });
  }

  if (!statoPaccoData.dataSpedizione) {
    res.status(400).json({ message: "la data di spedizione è obbligatoria" });
  }

  try {
    Pacco.update(
      {
        spedito: statoPaccoData.spedito,
        dataSpedizione: statoPaccoData.dataSpedizione,
      },
      {
        where: {
          id: statoPaccoData.id,
        },
      }
    );
    res
      .status(200)
      .json({ message: "stato di spedizione aggiornato con successo" });
  } catch (error) {
    res.status(500).json({ message: "errore interno del server" });
  }
};
