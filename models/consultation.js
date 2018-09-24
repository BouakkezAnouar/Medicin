const mongoose = require("mongoose");
const Joi = require("joi");
require("./fiche");

const consultationSchema = new mongoose.Schema({
  fiche: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Fiche"
  },
  ordonnances: [String],
  date: { type: Date, default: Date.now() },
  description: { type: String, default: null },
  prix: String
});

const Consultation = mongoose.model("Consultation", consultationSchema);

Consultation.createConsultation = async function(
  fiche,
  { ordonnances, description, prix }
) {
  const isFiche = await Fiche.findById(fiche);
  if (!isFiche) return "fiche not found !";
  const consultation = new Consultation({
    fiche,
    ordonnances,
    description,
    prix
  });

  await consultation.save();
  fiche = await Fiche.findById(fiche);
  fiche.consultations.push(consultation._id);
  return consultation;
};

Consultation.modifyConsultation = async function(
  ordonnances,
  description,
  prix
) {
  let consultation = await Consultation.findById(id);
  if (!consultation) return "consultation not found";

  consultation.description = description;
  consultation.prix = prix;
  //a changé !!
  consultation.ordonnances = ordonnances;
  const result = await consultation.save();
  return result;
};

Consultation.deleteConsultation = async function(id, idFiche) {
  // remove consultation from Consultation
  const consultation = await Consultation.findByIdAndRemove(id);
  if (!consultation) return "consultation not found!";
  //remove consultation from Fiche
  let fiche = await Fiche.findById(idFiche);
  if (!fiche) return "fiche not found!";
  fiche.consultations = fiche.consultations.filter(el => el !== idFiche);
};

Consultation.getConsultations = async function() {
  return await Consultation.find().sort({ _id: -1 });
};

Consultation.addOrdonnance = async function(idConsultation, ordonnance) {
  let consultation = await Consultation.findById(idConsultation);
  if (!consultation) return "consultation not found!";

  consultation.ordonnances.push(ordonnance);

  const result = await consultation.save();
  return result;
};

Consultation.deleteOrdonnance = async function(
  idConsultation,
  indexOrdonnance
) {
  let consultation = await Consultation.findById(idConsultation);
  if (!consultation) return undefined;

  consultation.ordonnances.splice(indexOrdonnance, 1);

  const result = await consultation.save();
  return result;
};

Consultation.modifyOrdonnance = async function(
  idConsultation,
  indexOrdonnance,
  newValue
) {
  let consultation = await Consultation.findById(idConsultation);
  if (!consultation) return "consultation not found";

  consultation.ordonnances[indexOrdonnance] = newValue;

  const result = await consultation.save();
  return result;
};

module.exports = Consultation;
