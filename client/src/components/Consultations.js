import React from "react";
import "../css/Consultation.css";
import AddConsultation from "./AddConsultation";
function Consultation(props) {
  return (
    <div>
      <div className="rdv">
        <div className="row row-striped">
          <div className="col-md-2  ">
            <h1 className="display-4 ">
              <span className="badge date-green">{props.day}</span>
            </h1>
            <h2>{props.month}</h2>
            <span>{props.year}</span>
          </div>
          <div className="col-md-2 text-center">
            <h3 className="text-uppercase">
              <strong>{props.patient}</strong>
            </h3>
            <ul className="list-inline">
              <li className="list-inline-item">
                <i className="fas fa-calendar-alt" /> {props.dayOfWeek}
              </li>
              <li className="list-inline-item">
                <i className="far fa-clock" />
                {props.hour}
              </li>
            </ul>
          </div>
          <div className="col-md-8">
            <strong>description:</strong>
            <p>{props.description}</p>
            <strong>ordonnance :</strong>
            <p>{props.ordonnance}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const Consultations = props => {
  const idFiche = props.match.params.id;
  let consultations;

  const fiche = props.fiches.filter(el => el._id === idFiche)[0];
  if (fiche && fiche.consultations) consultations = fiche.consultations;
  //console.log("consultations");
  //

  return (
    <div>
      <strong> Patient :</strong>
      <h2 className="text-uppercase">
        {fiche && fiche.patient && fiche.patient.nomPrenom}
      </h2>
      <AddConsultation
        AddConsultation={() => props.AddConsultation(idFiche)}
        onChange={props.onChange}
      />
      {consultations &&
        consultations.map(el => (
          <Consultation
            {...formatDate(el.date)}
            description={el.description}
            ordonnance={el.ordonnance}
          />
        ))}
    </div>
  );
};

function formatDate(date) {
  date = new Date(date);
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let day = date.getDate();
  let monthIndex = date.getMonth();
  let year = date.getFullYear();
  let hour = date.getHours();
  hour = hour < 10 ? "0" + hour : hour;
  let minutes = date.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let indexOfDayOfWeek = date.getDay();

  let days = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi"
  ];

  return {
    month: monthNames[monthIndex],
    year,
    hour: hour + ":" + minutes,
    day,
    dayOfWeek: days[indexOfDayOfWeek]
  };
}

export default Consultations;
