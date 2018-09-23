import React from "react";
function CreateFichePatient(props) {
  return (
    <div>
      <div className="register-photo">
        <div className="form-container">
          <form method="post">
            <h2 className="text-center">
              <strong>Fiche Patient :</strong>
            </h2>
            <div className="form-group">
              <input
                type="date"
                name="date"
                placeholder="date"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="name"
                name="name"
                placeholder="Nom de Patient"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="name"
                name="name"
                placeholder="Pénom de patient"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="date"
                name="Date_naissance"
                placeholder=""
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                name="Num_assurance_medicale"
                placeholder="Numéro assurance médicale"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="address"
                name="address"
                placeholder="Adresse"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="Telephone"
                placeholder="Telephone"
                className="form-control"
              />
            </div>
            <label>Contact d'urgence :</label>
            <div className="form-group">
              <input
                type="name"
                name="name"
                placeholder="Nom de contact"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="name"
                name="name"
                placeholder="Pénom de contact"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <select id="inputState" className="form-control">
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
                name="Telephone"
                placeholder="Telephone"
                className="form-control"
              />
            </div>
            <label>Histoire médicale :</label>
            <div className="form-group">
              <textarea
                name="Allergies"
                placeholder="Allergies"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <textarea
                name="Allergies"
                placeholder="Maladies chroniques"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <textarea
                name="Allergies"
                placeholder="Allergies aux médicaments"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="medecins anterieurs"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <button className="btn btn-primary btn-block" type="submit">
                Ajouter le patient
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateFichePatient;
