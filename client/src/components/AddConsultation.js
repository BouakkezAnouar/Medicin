import React from "react";
import "../css/Consultation.css";
function AddConsultation(props) {
  return (
    <div className="rdv">
      <div className="row row-striped">
        <div className=" text-center" />

        <div className="col-md-4">
          <strong>description:</strong>
          <textarea type="text" onChange={props.onChange} name="description" />
        </div>
        <div className="col-md-4">
          <strong>prix:</strong>
          <input type="text" onChange={props.onChange} name="prix" />
        </div>
        <div className="col-md-4">
          <strong>ordonnance:</strong>
          <textarea type="text" onChange={props.onChange} name="ordonnance" />
          <button onClick={props.AddConsultation} className="btn btn-primary">
            Ajouter une Consultation
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddConsultation;
