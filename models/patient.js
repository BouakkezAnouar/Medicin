const mongoose = require("mongoose");
const Joi = require("joi");
require("./fiche");

const patientSchema = new mongoose.Schema({
  fiche: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Fiche"
  },
  nom: { type: String, required: true, minlength: 3, maxlength: 255 },
  prenom: { type: String, required: true, minlength: 3, maxlength: 255 },
  age: String,
  telephone: { type: String, minlength: 8, maxlength: 8 },
  firstVisit: { type: Date, default: Date.now() },
  lastVisit: { type: Date, default: undefined },
  nbrVisit: { type: Number, min: 0 },
  adresse: { type: String, maxlength: 1024 },
  assuranceMedicale: String
});

const Patient = mongoose.model("Patient", patientSchema);

Patient.createPatient = async function(
  nom,
  prenom,
  age,
  telephone,
  adresse,
  assuranceMedicale
) {
  const patient = new Patient({
    nom,
    prenom,
    age,
    telephone,
    adresse,
    assuranceMedicale
  });

  await patient.save();
  return patient;
};

Patient.modifyPatient = async function(
  id,
  nom,
  prenom,
  age,
  telephone,
  adresse,
  assuranceMedicale
) {
  let patient = await Patient.findById(id);

  patient.nom = nom;
  patient.prenom = prenom;
  patient.age = age;
  patient.telephone = telephone;
  patient.adresse = adresse;
  patient.assuranceMedicale = assuranceMedicale;

  const result = await patient.save();
  return result;
};

Patient.deletePatient = async function(id) {
  return await Patient.findByIdAndRemove(id);
};

Patient.getPatients = async function() {
  return await Patient.find()
    .populate("fiche")
    .sort({ _id: -1 });
};

Patient.validatePatient = function(Patient) {
  const Schema = {
    nom: Joi.string()
      .min(3)
      .max(255)
      .required(),
    prenom: Joi.string()
      .min(3)
      .max(255)
      .required(),
    telephone: Joi.string()
      .min(8)
      .max(8),
    age: Joi.number()
      .integer()
      .min(0)
      .max(200),
    adresse: Joi.string().max(1024),
    assuranceMedicale: Joi.string().max(1024)
  };

  return Joi.validate(Patient, Schema);
};

module.exports = Patient;
