import React from "react";
import "../css/Consultation.css"
function AddConsultation(props) {
    return (
        <div className="rdv">
            <div className="row row-striped">
                <div className="col-md-2 text-center">
                    <input
                        type="search"
                        placeholder="Nom de patient"
                        className="add-day">

                    </input>
                </div>
                <div className="col-md-3 text-center">
                    <ul className="container">
                        <li className="list-inline-item"><i className="fas fa-calendar-alt"></i>
                            <input
                                type="date"
                                className="add-day"></input></li>
                        <li className="list-inline-item"><i className="far fa-clock"></i>
                            <input
                                type="time"
                                placeholder="Heure"
                                className="add-day"></input>
                        </li>
                    </ul>

                </div>
                <div className="col-md-7">
                    <strong>description:</strong>
                    <textarea />
                    <button className="btn btn-primary">Ajouter</button>
                </div>
            </div>

        </div>
    );
}

export default AddConsultation;
