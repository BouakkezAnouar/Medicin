import React from "react";
function CreateFichePatient(props) {
  return (
    <div>
      <div className="container">
        <div className="container-fiche">
          <div >
            <h2 className="text-center">
              <strong>Fiche Patient :</strong>
            </h2>
            <div className="form-group">
              <input
                type="date"
                name="date"
                placeholder="date"
                className="form-control"
                onChange={props.onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="name"
                name="patient"
                placeholder="Nom & Prénom de patient"
                className="form-control"
                onChange={props.onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="date"
                name="birth"
                className="form-control"
                onChange={props.onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                name="Num_ass_med"
                placeholder="Numéro assurance médicale"
                className="form-control"
                onChange={props.onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="address"
                name="address"
                placeholder="Adresse"
                className="form-control"
                onChange={props.onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="tel"
                placeholder="Telephone"
                className="form-control"
                onChange={props.onChange}
              />
            </div>
            <label>Contact d'urgence :</label>
            <div className="form-group">
              <input
                type="name"
                name="nom_contact"
                placeholder="Nom & Prénom de contact"
                className="form-control"
                onChange={props.onChange}
              />
            </div>
            <div className="form-group">
              <select name="lien" id="inputState" className="form-control" onChange={props.onChange}>
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
                name="tel_contact"
                placeholder="Telephone"
                className="form-control"
                onChange={props.onChange}
              />
            </div>
            <label>Histoire médicale :</label>
            <div className="form-group">
              <textarea
                name="Allergies"
                placeholder="Allergies"
                className="form-control"
                onChange={props.onChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="maladies_chr"
                placeholder="Maladies chroniques"
                className="form-control"
                onChange={props.onChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="Allergies_medica"
                placeholder="Allergies aux médicaments"
                className="form-control"
                onChange={props.onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="medecins_anter"
                placeholder="medecins anterieurs"
                className="form-control"
                onChange={props.onChange}
              />
            </div>

            <div className="form-group">
              <button className="btn btn-primary btn-block" type="submit" onClick={props.onClick}>
                Ajouter le patient
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateFichePatient;
