import React from "react";
import { withRouter } from "react-router-dom";
const CreateFichePatient = withRouter(props => {
  const fiche = props.fiche;
  return (
    <div>
      <div className="container">
        <div className="container-fiche">
          <div>
            <h2 className="text-center">
              <strong>Fiche Patient :</strong>
            </h2>

            <div className="form-group">
              <input
                type="name"
                name="nomPrenom"
                placeholder="Nom & Prénom de patient"
                className="form-control"
                onChange={props.onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="age"
                placeholder="Age"
                className="form-control"
                onChange={props.onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="assuranceMedicale"
                placeholder="Numéro assurance médicale"
                className="form-control"
                onChange={props.onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="adresse"
                placeholder="Adresse"
                className="form-control"
                onChange={props.onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="telephone"
                placeholder="Telephone"
                className="form-control"
                onChange={props.onChange}
              />
            </div>
            <label>Contact d'urgence :</label>
            <div className="form-group">
              <input
                type="text"
                name="contact_nomPrenom"
                placeholder="Nom & Prénom de contact"
                className="form-control"
                onChange={props.onChange}
              />
            </div>
            <div className="form-group">
              <select
                name="contact_lienParente"
                id="inputState"
                className="form-control"
                onChange={props.onChange}
              >
                <option selected>Lien de parenté ...</option>
                <option>père</option>
                <option>mère</option>
                <option>grand-père</option>
                <option>grand-mère</option>
                <option>frere</option>
                <option>fils</option>
                <option>petit-fils</option>
                <option>cousin</option>
                <option>oncle</option>
                <option>époux(se)</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="contact_telephone"
                placeholder="Telephone"
                className="form-control"
                onChange={props.onChange}
              />
            </div>
            <label>Histoire médicale :</label>
            <div className="form-group">
              <textarea
                name="allegries"
                placeholder="Allergies"
                className="form-control"
                onChange={props.onChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="chroniques"
                placeholder="Maladies chroniques"
                className="form-control"
                onChange={props.onChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="allegriesMedicaments"
                placeholder="Allergies aux médicaments"
                className="form-control"
                onChange={props.onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="medicinsAnterieurs"
                placeholder="medecins anterieurs"
                className="form-control"
                onChange={props.onChange}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                type="submit"
                onClick={() => props.CreateFichePatient(props.history)}
              >
                Ajouter le patient
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CreateFichePatient;
