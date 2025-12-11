import Pacco from "../models/Pacco.js";

export const registraPacco = async (req, res) => {
  const paccoData = req.body;

  if (paccoData.mittente == "" || !paccoData.mittente) {
    res.status(400).json({ message: "il mittente è obbligatorio" });
  }

  if (paccoData.destinatario == "" || !paccoData.destinatario) {
    res.status(400).json({ message: "il destinatario è obbligatorio" });
  }

  if (paccoData.mittenteIndirizzo == "" || !paccoData.mittenteIndirizzo) {
    res
      .status(400)
      .json({ message: "l'indirizzo del mittente è obbligatorio" });
  }

  if (
    paccoData.destinatarioIndirizzo == "" ||
    !paccoData.destinatarioIndirizzo
  ) {
    res
      .status(400)
      .json({ message: "l'indirizzo del destinatario è obbligatorio" });
  }

  if (paccoData.prezzo == "" || !paccoData.prezzo) {
    res.status(400).json({ message: "il prezzo è obbligatorio" });
  }

  if (isNaN(paccoData.prezzo)) {
    res.status(400).json({ message: "il prezzo deve essere un numero valido" });
  }

  if (
    paccoData.spedito == "" ||
    paccoData.spedito == null ||
    paccoData.spedito == undefined
  ) {
    res.status(400).json({ message: "lo stato di spedizione è obbligatorio" });
  }

  if (paccoData.consegnato == null || paccoData.consegnato == undefined) {
    res.status(400).json({ message: "lo stato di consegna è obbligatorio" });
  }

  if (
    paccoData.spedito &&
    (paccoData.dataSpedizione == "" || !paccoData.dataSpedizione)
  ) {
    res.status(400).json({
      message:
        "la data di spedizione è obbligatoria se il pacco è stato spedito",
    });
  }

  if (
    paccoData.consegnato &&
    (paccoData.dataConsegna == "" || !paccoData.dataConsegna)
  ) {
    res.status(400).json({
      message:
        "la data di consegna è obbligatoria se il pacco è stato consegnato",
    });
  }

  try {
    Pacco.create({
      mittente: paccoData.mittente,
      destinatario: paccoData.destinatario,
      mittenteIndirizzo: paccoData.mittenteIndirizzo,
      destinatarioIndirizzo: paccoData.destinatarioIndirizzo,
      prezzo: paccoData.prezzo,
      spedito: paccoData.spedito,
      consegnato: paccoData.consegnato,
      dataSpedizione: paccoData.dataSpedizione,
      dataConsegna: paccoData.dataConsegna,
    });
    res.status(201).json({ message: "pacco registrato con successo" });
  } catch (error) {
    res.status(500).json({ message: "qualcosa è andato storto" });
  }
};
