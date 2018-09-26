import React from "react";
import "../css/FichePatient.css";
function FichePatient(props) {
  // const patient = props.patients.filter(el => el._id == props.match.params.id);
  const patient = props.patients[0];
  let fiche = patient.fiche;
  let contactUrgence;
  if (fiche && fiche.contactUrgence) contactUrgence = fiche.contactUrgence;

  //const contactUrgence = fiche.contactUrgence;
  //console.log(contactUrgence.nom);
  if (!patient) return <div>id not found</div>;
  return (
    <div className="container">
      <div className="container-fiche">
        <h2 className="text-center">
          <strong>Fiche Patient :</strong>
          <span className="text-uppercase">
            {patient.nom + " " + patient.prenom}
          </span>
        </h2>
        <table className="table table-hover">
          <thead />
          <tbody>
            <tr>
              <th scope="row">Nom & Prénom de patient</th>
              <td>{patient.nom}</td>
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
                {contactUrgence && contactUrgence.nom && contactUrgence.prenom
                  ? contactUrgence.nom + " " + contactUrgence.prenom
                  : ""}
              </td>
            </tr>
            <tr>
              <th scope="row">Lien de parenté</th>
              <td>
                {contactUrgence && contactUrgence.lienParente
                  ? contactUrgence.lienParente
                  : ""}
              </td>
            </tr>
            <tr>
              <th scope="row">Telephone</th>
              <td>
                {contactUrgence && contactUrgence.telephone
                  ? contactUrgence.telephone
                  : ""}
              </td>
            </tr>
            <label>Histoirique médicale :</label>
            <tr>
              <th scope="row">Allergies</th>
              <td>{patient.Allergies}</td>
            </tr>
            <tr>
              <th scope="row">Maladies chroniques</th>
              <td>{patient.maladies_chr}</td>
            </tr>
            <tr>
              <th scope="row">Allergies aux médicaments</th>
              <td>{patient.Allergies_medica}</td>
            </tr>
            <tr>
              <th scope="row">médecins anterieurs</th>
              <td>{patient.medecins_anter}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FichePatient;
