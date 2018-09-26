const mongoose = require("mongoose");
const Joi = require("joi");
require("./consultation");

const ficheSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Patient"
  },
  consultations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Consultation"
      //required: true
    }
  ],
  allegries: { type: String, default: "" },
  chroniques: { type: String, default: "" },
  allegriesMedicaments: { type: String, default: "" },
  medicinsAnterieurs: { type: String, default: "" },
  contactUrgence: mongoose.Schema.Types.Mixed,
  dateCreation: { type: Date, default: Date.now() }
});

const Fiche = mongoose.model("Fiche", ficheSchema);

Fiche.createFiche = async function(
  patient,
  {
    allegries,
    chroniques,
    allegriesMedicaments,
    medicinsAnterieurs,
    contactUrgence
  }
) {
  const fiche = new Fiche({
    patient,
    allegries,
    chroniques,
    allegriesMedicaments,
    medicinsAnterieurs,
    contactUrgence
  });

  await fiche.save();
  return fiche;
};
/*
Fiche.addAllegrie = async function(id, allegrie) {
  let fiche = await Fiche.findById(id);
  if (!fiche) return;

  fiche.allegries.push(allegrie);

  const result = await fiche.save();
  return result;
};

Fiche.deleteAllegrie = async function(idFiche, indexAllegrie) {
  let fiche = await Fiche.findById(id);
  if (!fiche) return;

  fiche.allegries.splice(indexAllegrie, 1);

  const result = await fiche.save();
  return result;
};

Fiche.modifyAllegrie = async function(idFiche, indexAllegrie, newValue) {
  let fiche = await Fiche.findById(id);
  if (!fiche) return;

  fiche.allegries[indexAllegrie] = newValue;

  const result = await fiche.save();
  return result;
};*/

Fiche.deleteFiche = async function(id) {
  return await Fiche.findByIdAndRemove(id);
};

Fiche.getFiches = async function() {
  return await Fiche.find()
    .populate("patient")
    .populate("consultations")
    .sort({ _id: -1 });
};
/*   creation d'un fiche
async function create() {
    const patient = "5ba6c3a722a486137fd00ce1";
    const allegries = ["grippe", "fachla"];
    const medicinsAnterieurs = ["ahmed hlali", "farouk"];
    contactUrgence = {
      nom: "bannour",
      prenom: "bouakkez",
      telephone: "54645269"
    };
    const fiche = await Fiche.createFiche(patient, {
      allegries,
      medicinsAnterieurs,
      contactUrgence
    });
    console.log(fiche);
  }
*/

/*
Fiche.validatePatient = function(Patient) {
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
*/
module.exports = Fiche;
