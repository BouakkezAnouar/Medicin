import React from "react";
import "../css/FichePatient.css";
import { withRouter } from "react-router-dom";
const FichePatient = withRouter(props => {
  const patient = props.patients.filter(
    el => el._id == props.match.params.id
  )[0];
  let fiche;
  if (patient && patient.fiche) fiche = patient.fiche;
  let contactUrgence;
  if (fiche && fiche.contactUrgence) contactUrgence = fiche.contactUrgence;
  if (!patient) return <div>id not found</div>;
  return (
    <div className="container">
      <div className="container-fiche">
        <h2 className="text-center">
          <h1>modifier fiche</h1>
          <h1 onClick={() => props.modifierFiche(props.history, patient._id)}>
            modifier fiche
          </h1>
          <strong>Fiche Patient :</strong>
          <span className="text-uppercase">{patient.nomPrenom}</span>
        </h2>
        <table className="table table-hover">
          <thead />
          <tbody>
            <tr>
              <th scope="row">Nom & Prénom de patient</th>
              <td>{patient.nomPrenom}</td>
            </tr>

            <tr>
              <th scope="row">Telephone</th>
              <td>{patient.telephone}</td>
            </tr>
            <tr>
              <th scope="row">Age</th>
              <td>{patient.age}</td>
            </tr>
            <tr>
              <th scope="row">Num assurance médicale</th>
              <td>{patient.assuranceMedicale}</td>
            </tr>
            <tr>
              <th scope="row">Adresse</th>
              <td>{patient.adresse}</td>
            </tr>
            <label>Contact d'urgence :</label>
            <tr>
              <th scope="row">Nom & Prénom de contact</th>
              <td>
                {contactUrgence && contactUrgence.contact_nomPrenom
                  ? contactUrgence.contact_nomPrenom
                  : ""}
              </td>
            </tr>
            <tr>
              <th scope="row">Lien de parenté</th>
              <td>
                {contactUrgence && contactUrgence.contact_lienParente
                  ? contactUrgence.contact_lienParente
                  : ""}
              </td>
            </tr>
            <tr>
              <th scope="row">Telephone</th>
              <td>
                {contactUrgence && contactUrgence.contact_telephone
                  ? contactUrgence.contact_telephone
                  : ""}
              </td>
            </tr>
            <label>Histoirique médicale :</label>
            <tr>
              <th scope="row">Allergies</th>
              <td>{fiche && fiche.allegries ? fiche.allegries : ""}</td>
            </tr>
            <tr>
              <th scope="row">Maladies chroniques</th>
              <td>{fiche && fiche.chroniques ? fiche.chroniques : ""}</td>
            </tr>
            <tr>
              <th scope="row">Allergies aux médicaments</th>
              <td>
                {fiche && fiche.allegriesMedicaments
                  ? fiche.allegriesMedicaments
                  : ""}
              </td>
            </tr>
            <tr>
              <th scope="row">médecins anterieurs</th>
              <td>
                {fiche && fiche.medicinsAnterieurs
                  ? fiche.medicinsAnterieurs
                  : ""}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default FichePatient;
