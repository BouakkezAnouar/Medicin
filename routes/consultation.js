const express = require("express");
const router = express.Router();
const Fiche = require("../models/fiche");
const Patient = require("../models/patient");
const Consultation = require("../models/consultation");
const mongoose = require("mongoose");

router.get("/", async (req, res) => {
  const consultations = await Consultation.getConsultations();
  res.status(200).send(consultations);
});

router.post("/", async (req, res) => {
  //const { error } = Fiche.validatePatient(req.body);
  //if (error) return res.status(400).send(error.details[0].message);

  const idFiche = req.body.idFiche;
  if (!idFiche) return res.status(401).send("fiche id  not found !");
  const ordonnance = req.body.ordonnance;
  const description = req.body.description;
  const prix = req.body.prix;

  const consultation = await Consultation.createConsultation(idFiche, {
    ordonnance,
    description,
    prix
  });

  await consultation.save();
  //add consultation to fiche
  let fiche = await Fiche.findById(idFiche); //(idFiche);
  fiche.consultations.push(consultation._id);
  await fiche.save();

  res.status(200).send(consultation);
});

router.put("/", async (req, res) => {
  const idConsultation = req.body.idConsultation;
  if (!idConsultation)
    return res.status(401).send("no consultation id in req.body");
  const ordonnance = req.body.ordonnance;
  const description = req.body.description;
  const prix = req.body.prix;
  const consultation = await Consultation.modifyConsultation(
    idConsultation,
    ordonnance,
    description,
    prix
  );

  res.status(200).send(consultation);
});
/*
router.delete("/", async (req, res) => {
  const idConsultation = req.body.idConsultation;
  if (!idConsultation)
    return res.status(401).send("no consultation id in req.body");
  const consultation = await Consultation.deleteConsultation(idConsultation);
  const idFiche = consultation.fiche;
  let fiche = await Fiche.findById(idFiche);
  fiche.consultations = fiche.consultations.filter((el, i) => {
    console.log(el[i]);
    return el[i] !== idFiche;
  });
  // await fiche.save();
  res.status(200).send(fiche);
});
*/
module.exports = router;
