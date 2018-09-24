import React from "react";
import "../css/FichePatient.css"
function FichePatient(props) {
  props = props.fiche;
  return (
    <div className="container">
      <div className="container-fiche">
        <h2 className="text-center">
          <strong>Fiche Patient :</strong><span className="text-uppercase"> {props.patient}</span>
        </h2>
        <table className="table table-hover">
          <thead />
          <tbody>
            <tr>
              <th scope="row">Nom & Prénom de patient</th>
              <td>{props.nom}</td>
            </tr>

            <tr>
              <th scope="row">Telephone</th>
              <td>{props.tel}</td>
            </tr>
            <tr>
              <th scope="row">Date de naissance</th>
              <td>{props.birth}</td>
            </tr>
            <tr>
              <th scope="row">Num assurance médicale</th>
              <td>{props.Num_ass_med}</td>
            </tr>
            <tr>
              <th scope="row">Adresse</th>
              <td>{props.address}</td>
            </tr>
            <label>Contact d'urgence :</label>
            <tr>
              <th scope="row">Nom & Prénom de contact</th>
              <td>{props.nom_contact}</td>
            </tr>
            <tr>
              <th scope="row">Lien de parenté</th>
              <td>{props.lien}</td>
            </tr>
            <tr>
              <th scope="row">Telephone</th>
              <td>{props.tel_contact}</td>
            </tr>
            <label>Histoirique médicale :</label>
            <tr>
              <th scope="row">Allergies</th>
              <td>{props.Allergies}</td>
            </tr>
            <tr>
              <th scope="row">Maladies chroniques</th>
              <td>{props.maladies_chr}</td>
            </tr>
            <tr>
              <th scope="row">Allergies aux médicaments</th>
              <td>{props.Allergies_medica}</td>
            </tr>
            <tr>
              <th scope="row">médecins anterieurs</th>
              <td>{props.medecins_anter}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FichePatient;
