import React from "react";
function Consultation(props) {
  return (
    <div classNameName="Container">
      <div className="row row-striped">
        <div className="col-2 text-center ">
          <h1 className="display-4 ">
            <span className="badge date-green">{props.day}</span>
          </h1>
          <h2>{props.month}</h2>
        </div>
        <div className="col-10">
          <h3 className="text-uppercase">
            <strong>{props.patient}</strong>
          </h3>
          <ul className="list-inline">
            <li className="list-inline-item">
              <i className="fas fa-calendar-alt" /> Wednesday
            </li>
            <li className="list-inline-item">
              <i class="far fa-clock"></i>
              {props.Hour}
            </li>
          </ul>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Consultation;
