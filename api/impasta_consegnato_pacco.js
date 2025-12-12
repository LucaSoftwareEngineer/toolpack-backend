import Pacco from "../models/Pacco.js";

export const impostaConsegnatoPacco = async (req, res) => {
  const consegnatoPaccoData = req.body;
  let nErr = 0;

  if (consegnatoPaccoData.id == null || consegnatoPaccoData.id == undefined) {
    nErr++;
    res.status(400).json({ message: "l'id del pacco è obbligatorio" });
  }

  if (
    consegnatoPaccoData.consegnato == null ||
    consegnatoPaccoData.consegnato == undefined
  ) {
    nErr++;
    res.status(400).json({ message: "lo stato di consegna è obbligatorio" });
  }

  if (!consegnatoPaccoData.dataConsegna) {
    nErr++;
    res.status(400).json({ message: "la data di consegna è obbligatoria" });
  }

  if (nErr === 0) {
    try {
      Pacco.update(
        {
          consegnato: consegnatoPaccoData.consegnato,
          dataConsegna: consegnatoPaccoData.dataConsegna,
        },
        {
          where: {
            id: consegnatoPaccoData.id,
          },
        }
      );
      res
        .status(200)
        .json({ message: "stato di consegna aggiornato con successo" });
    } catch (error) {
      res.status(500).json({ message: "errore interno del server" });
    }
  }
};
