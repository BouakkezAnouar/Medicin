const express = require("express");
const router = express.Router();
const Patient = require("../models/patient");
const Fiche = require("../models/fiche");

router.get("/", async (req, res) => {
  const patients = await Patient.getPatients();
  res.status(200).send(patients);
});

router.post("/", async (req, res) => {
  //const { error } = Patient.validatePatient(req.body);
  //if (error) return res.status(400).send(error.details[0].message);

  const patient = await Patient.createPatient(
    req.body.nomPrenom,
    req.body.age,
    req.body.telephone,
    req.body.adresse,
    req.body.assuranceMedicale
  );
  res.status(200).send(patient);
});

router.put("/", async (req, res) => {
  const id = req.body.id;
  const patient = await Patient.findById(id);
  if (!patient) return res.status(401).send("patient not found!");

  if (req.body.nomPrenom) patient.nomPrenom = req.body.nomPrenom;
  if (req.body.age) patient.age = req.body.age;
  if (req.body.telephone) patient.telephone = req.body.telephone;
  if (req.body.adresse) patient.adresse = req.body.adresse;
  if (req.body.assuranceMedicale)
    patient.assuranceMedicale = req.body.assuranceMedicale;

  await patient.save();

  res.status(200).send(patient);
});

router.delete("/", async (req, res) => {
  const id = req.body.id;
  patient = await Patient.findById(id);
  if (!patient) return res.status(401).send("patient not found!");

  //delete fiche related with the patient
  const ficheId = patient.fiche;
  patient = await Patient.deletePatient(id);
  await Fiche.deleteFiche(ficheId);

  res.status(200).send(patient);
});

module.exports = router;
