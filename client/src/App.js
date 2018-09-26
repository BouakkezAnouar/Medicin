import React, { Component } from "react";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import CreateFichePatient from "./components/CreateFichePatient";
import FichePatient from "./components/FichePatient";
import Footer from "./components/Footer";
import Consultation from "./components/Consultations";
import AddConsultation from "./components/AddConsultation";
import ListePatient from "./components/ListePatient";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import "./css/App.css";
const NoMatch = () => {
  return <h1>404 not found</h1>;
};

const PatientTest = [
  {
    _id: 1,
    nomPrenom: "bouakkez anouar",
    age: "23",
    telephone: "54222222"
  },
  {
    _id: 2,
    nomPrenom: "kouraichi achref",
    age: "22",
    telephone: "54888888"
  },
  { _id: 3, nomPrenom: "ezzi mohamed", age: "27", telephone: "54222222" }
];
class App extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        fiche: {
          allegries: "",
          medicinsAnterieurs: "",
          chroniques: "",
          allegriesMedicaments: "",
          contact_nomPrenom: "",
          contact_lienParente: "",
          contact_telephone: "",
          nomPrenom: "",
          telephone: "",
          age: "",
          assuranceMedicale: "",
          adresse: ""
        },
        patients: PatientTest,
        filter: ""
      };
      this.CreateFichePatient = this.CreateFichePatient.bind(this);
    }
  }
  handleChange(e) {
    const fiche = this.state.fiche;
    fiche[e.target.name] = e.target.value;
    this.setState({ fiche });
  }

  handleClick() {
    console.log("envoyer ceci vers bd");
    console.log(this.state.fiche);
  }
  handleChangeSearch = event => {
    this.setState({ filter: event.target.value });
  };

  getFiltredPatients = () => {
    return this.state.patients.filter(patient =>
      patient.nomPrenom.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  showFiche = idFiche => {
    document.location.href = `http://localhost:3000/fiche/${idFiche}`;
  };
  createFiche = () => {
    document.location.href = `http://localhost:3000/CreateFiche`;
  };

  async CreateFichePatient() {
    const nomPrenom = this.state.fiche.nomPrenom;
    const age = this.state.fiche.age;
    const telephone = this.state.fiche.telephone;
    const assuranceMedicale = this.state.fiche.assuranceMedicale;
    const adresse = this.state.fiche.adresse;
    const res = await axios.post("http://localhost:7000/patient", {
      nomPrenom,
      age,
      telephone,
      assuranceMedicale,
      adresse
    });
    const patient = res.data;
    if (!patient) return;
    const idPatient = patient._id;

    const allegries = this.state.fiche.allegries;
    const chroniques = this.state.fiche.chroniques;
    const allegriesMedicaments = this.state.fiche.allegriesMedicaments;
    const medicinsAnterieurs = this.state.fiche.medicinsAnterieurs;
    const contact_nomPrenom = this.state.fiche.contact_nomPrenom;
    const contact_telephone = this.state.fiche.contact_telephone;
    const contact_lienParente = this.state.fiche.contact_lienParente;

    const fiche = await axios.post("http://localhost:7000/fiche", {
      patient: idPatient,
      allegries,
      chroniques,
      allegriesMedicaments,
      medicinsAnterieurs,
      contact_lienParente,
      contact_nomPrenom,
      contact_telephone
    });

    let patients = await axios.get("http://localhost:7000/patient");
    patients = patients.data;

    this.setState({ patients });

    console.log(patient);
  }
  componentDidMount() {
    axios
      .get("http://localhost:7000/patient")
      .then(res => this.setState({ patients: res.data }))
      .catch(err => console.log(err.message));
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <ListePatient
                patients={this.getFiltredPatients()}
                onChange={this.handleChangeSearch.bind(this)}
                showFiche={this.showFiche}
                createFiche={this.createFiche}
              />
            )}
          />
          <Route
            path="/patients"
            render={() => (
              <FichePatient
                patient={this.state.patient}
                fiche={this.state.fiche}
              />
            )}
          />

          <Route
            path="/fiche/:id"
            render={props => {
              return <FichePatient {...props} patients={this.state.patients} />;
            }}
          />
          <Route
            path="/createFiche"
            render={props => {
              return (
                <CreateFichePatient
                  {...props}
                  onChange={this.handleChange.bind(this)}
                  onClick={this.handleClick.bind(this)}
                  CreateFichePatient={this.CreateFichePatient}
                />
              );
            }}
          />

          <Route component={NoMatch} />
        </Switch>

        {/*
           <SearchBar />
        <Consultation patient="Ali ben Amor" day="23" month="OCT" year="2018" Hour="09:30" description=" mridh fi 7ala" />
        <AddConsultation />
        <CreateFichePatient onChange={this.handleChange.bind(this)} onClick={this.handleClick.bind(this)} />
        <FichePatient patient={this.state.patient}
          fiche={this.state.fiche}
        />
        <ListePatient patients={this.getFiltredPatients()} onChange={this.handleChangeSearch.bind(this)} /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
