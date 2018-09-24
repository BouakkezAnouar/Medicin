const mongoose = require("mongoose");
const Joi = require("joi");
const Fiche = require("./fiche");
const consultationSchema = new mongoose.Schema({
  fiche: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Fiche"
  },
  ordonnance: { type: String, default: "" },
  date: { type: Date, default: Date.now() },
  description: { type: String, default: "" },
  prix: { type: String, default: "" }
});

const Consultation = mongoose.model("Consultation", consultationSchema);

Consultation.createConsultation = async function(
  idFiche,
  { ordonnance, description, prix }
) {
  //const fiche = await Fiche.findById(idFiche);
  //if (!fiche) return "fiche not found !";
  let consultation = new Consultation({
    fiche: idFiche,
    ordonnance,
    description,
    prix
  });

  consultation = await consultation.save();
  return consultation;
};

Consultation.modifyConsultation = async function(
  idConsultation,
  ordonnance,
  description,
  prix
) {
  let consultation = await Consultation.findById(idConsultation);
  if (!consultation) return "consultation not found";

  if (description) consultation.description = description;
  if (prix) consultation.prix = prix;
  if (ordonnance) consultation.ordonnance = ordonnance;
  const result = await consultation.save();
  return result;
};
/*
Consultation.deleteConsultation = async function(idConsultation) {
  // remove consultation from Consultation
  const consultation = await Consultation.findByIdAndRemove(idConsultation);
  console.log(consultation);
  // if (!consultation) return "consultation not found!";
  //remove consultation from Fiche
  return consultation;
};
*/

Consultation.getConsultations = async function() {
  return await Consultation.find().sort({ _id: -1 });
};

/*
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
*/
module.exports = Consultation;
