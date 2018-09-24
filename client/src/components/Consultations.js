import React from "react";
import "../css/Consultation.css"
function Consultation(props) {
  return (
    <div>
      <div className="rdv">
        <button className="btn btn-secondary"><h1>+</h1></button>
        <div className="row row-striped">
          <div className="col-md-2  ">
            <h1 className="display-4 "><span className="badge date-green">{props.day}</span></h1>
            <h2>{props.month}</h2>
            <span>{props.year}</span>
          </div>
          <div className="col-md-2 text-center">
            <h3 className="text-uppercase"><strong>{props.patient}</strong></h3>
            <ul className="list-inline">
              <li className="list-inline-item"><i className="fas fa-calendar-alt"></i> Mercredi</li>
              <li className="list-inline-item"><i className="far fa-clock"></i>{props.Hour}</li>
            </ul>
          </div>
          <div className="col-md-8">
            <strong>description:</strong>
            <p>{props.description} Lorem ipsum dolsit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className="btn btn-primary">Ordonnance</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultation;
