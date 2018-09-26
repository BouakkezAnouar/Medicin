import React, { Component } from "react";

function PatientItem(props) {
  return (
    <tr onClick={props.onClick}>
      <td>{props.patient.nomPrenom}</td>
      <td>{props.patient.nomPrenom}</td>
      <td>{props.patient.age}</td>
      <td>{props.patient.telephone}</td>
    </tr>
  );
}
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
            <h1 onClick={this.props.createFiche}>+</h1>
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
                <PatientItem
                  patient={el}
                  onClick={() => this.props.showFiche(el._id)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListePatient;
