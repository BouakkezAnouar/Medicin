import React, { Component } from "react";
import { withRouter } from "react-router-dom";

const PatientItem = withRouter(props => (
  <tr onClick={() => props.history.push(`/fiche/${props.id}`)}>
    <td>{props.patient.nomPrenom}</td>
    <td>{props.patient.nomPrenom}</td>
    <td>{props.patient.age}</td>
    <td>{props.patient.telephone}</td>
  </tr>
));
class ListePatient extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {};
    }
  }

  redirect = i => {
    console.log("clicked", i);
  };

  render() {
    return (
      <div className="container">
        <div className="container">
          <button className="btn btn-secondary">
            <ToCreateFiche />
          </button>
          <div className="col-md-3 col-md-4">
            <div className="form-group">
              <i className="fa fa-search" />
              <input
                type="search"
                name="search"
                id="search-field"
                className="search-field"
                onChange={this.props.onChange}
              />
            </div>
          </div>
        </div>
        <div className="container-fiche">
          <h2 className="text-center">Liste de patients</h2>
          <table className="table table-hover" width="80%">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Date de naissance</th>
                <th>Telephone</th>
              </tr>
            </thead>
            <tbody>
              {this.props.patients.map((el, i) => (
                <PatientItem patient={el} id={el._id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const ToCreateFiche = withRouter(props => (
  <h1 onClick={() => props.history.push("/createFiche")}>+</h1>
));

export default ListePatient;
