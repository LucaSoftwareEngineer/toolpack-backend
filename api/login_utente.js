import Utente from "../models/Utente.js";
import jwt from "jwt-simple";
import { jwtKey } from "../tools/jwt_key.js";
import sha256 from "sha256";

export const loginUtente = (req, res) => {
  const credenzialiData = req.body;
  let nErr = 0;

  if (credenzialiData.username == "" || !credenzialiData.username) {
    nErr++;
    res.status(400).json({ message: "Lo username è obbligatorio" });
  }

  if (credenzialiData.password == "" || !credenzialiData.password) {
    nErr++;
    res.status(400).json({ message: "La password è obbligatoria" });
  }

  if (nErr === 0) {
    Utente.findOne({
      where: {
        username: credenzialiData.username,
        password: sha256(credenzialiData.password),
      },
    })
      .then((utente) => {
        if (utente) {
          res
            .status(200)
            .json({
              message: "Login effettuato con successo",
              token: jwt.encode(credenzialiData.username, jwtKey),
            });
        } else {
          res.status(401).json({ message: "Credenziali non valide" });
        }
      })
      .catch((error) => {
        res.status(500).json({ message: "Errore del server" });
      });
  }
};
