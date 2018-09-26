const express = require("express");
const router = express.Router();
const Fiche = require("../models/fiche");
const Patient = require("../models/patient");

router.get("/", async (req, res) => {
  const fiches = await Fiche.getFiches();
  res.status(200).send(fiches);
});

router.post("/", async (req, res) => {
  //const { error } = Fiche.validatePatient(req.body);
  //if (error) return res.status(400).send(error.details[0].message);

  const patient = req.body.patient;
  const allegries = req.body.allegries;
  const chroniques = req.body.chroniques;
  const allegriesMedicaments = req.body.allegriesMedicaments;
  const medicinsAnterieurs = req.body.medicinsAnterieurs;
  const contact_nom = req.body.contact_nom;
  const contact_prenom = req.body.contact_prenom;
  const contact_telephone = req.body.contact_telephone;
  const contact_lien = req.body.contact_lien;

  const contactUrgence = {
    nom: contact_nom || "",
    prenom: contact_prenom || "",
    telephone: contact_telephone || "",
    lienParente: contact_lien || ""
  };

  const fiche = await Fiche.createFiche(patient, {
    allegries,
    medicinsAnterieurs,
    contactUrgence,
    chroniques,
    allegriesMedicaments
  });
  //add fiche to patient  / patientf jaust a variable name to not make conflit with patient
  let patientF = await Patient.findById(patient);
  patientF.fiche = fiche;
  await patientF.save();

  res.status(200).send(patientF);
});

router.put("/", async (req, res) => {});

module.exports = router;
