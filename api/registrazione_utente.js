import sha256 from "sha256";
import Utente from "../models/Utente.js";

export const registrazioneUtente = (req, res) => {
  const utenteData = req.body;
  let nErr = 0;

  if (utenteData.username == "" || !utenteData.username) {
    nErr++;
    res.status(400).json({ message: "Lo username è obbligatorio" });
  }

  if (utenteData.password == "" || !utenteData.password) {
    nErr++;
    res.status(400).json({ message: "La password è obbligatoria" });
  }

  if (nErr === 0) {
    try {
      Utente.create({
        username: utenteData.username,
        password: sha256(utenteData.password),
      });
      res.status(201).json({ message: "Utente registrato con successo" });
    } catch (error) {
      res.status(500).json({ message: "Errore del server" });
    }
  }
};
