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
    nom: "bouakkez",
    prenom: "anouer",
    age: "23",
    telephone: "54222222"
  },
  {
    _id: 2,
    nom: "kouraichi",
    prenom: "achraf",
    age: "22",
    telephone: "54888888"
  },
  { _id: 3, nom: "ezzi", prenom: "med", age: "27", telephone: "54222222" }
];
class App extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        fiche: {
          date: "",
          patient: "",
          tel: "",
          birth: "",
          Num_ass_med: "",
          address: "",
          nom_contact: "",
          Lien: "",
          tel_contact: "",
          Allergies: "",
          maladies_chr: "",
          Allergies_medica: "",
          medecins_anter: ""
        },
        patients: PatientTest,
        filter: ""
      };
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
    //console.log("filter", this.state.filter)
  };

  getFiltredPatients = () => {
    return this.state.patients.filter(patient =>
      patient.nom.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  showFiche = idFiche => {
    document.location.href = `http://localhost:3000/fiche/${idFiche}`;
  };

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
