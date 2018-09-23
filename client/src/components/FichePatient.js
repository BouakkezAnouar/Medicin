import React from "react";
function FichePatient(props) {
  return (
    <div>
      <h2 className="text-center">
        <strong>Fiche Patient :</strong> {props.patient}
      </h2>
      <table className="table table-hover">
        <thead />
        <tbody>
          <tr>
            <th scope="row">Nom de patient</th>
            <td>{props.nom}</td>
          </tr>
          <tr>
            <th scope="row">Prénom de patient</th>
            <td>{props.prenom}</td>
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
            <th scope="row">Nom de contact</th>
            <td>{props.nom}</td>
          </tr>
          <tr>
            <th scope="row">Prénom de contact</th>
            <td>{props.nom}</td>
          </tr>
          <tr>
            <th scope="row">Lien de parenté</th>
            <td>{props.nom}</td>
          </tr>
          <tr>
            <th scope="row">Telephone</th>
            <td>{props.nom}</td>
          </tr>
          <label>Histoirique médicale :</label>
          <tr>
            <th scope="row">Allergies</th>
            <td>{props.nom}</td>
          </tr>
          <tr>
            <th scope="row">Maladies chroniques</th>
            <td>{props.nom}</td>
          </tr>
          <tr>
            <th scope="row">Allergies aux médicaments</th>
            <td>{props.nom}</td>
          </tr>
          <tr>
            <th scope="row">médecins anterieurs</th>
            <td>{props.nom}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FichePatient;
