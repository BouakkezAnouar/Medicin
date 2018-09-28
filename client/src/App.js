import React, { Component } from "react";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import CreateFichePatient from "./components/CreateFichePatient";
import FichePatient from "./components/FichePatient";
import Footer from "./components/Footer";
import Consultations from "./components/Consultations";
import AddConsultation from "./components/AddConsultation";
import ListePatient from "./components/ListePatient";
import { Switch, Route, withRouter } from "react-router-dom";
import axios from "axios";
import "./css/App.css";
import ModifierFiche from "./components/ModifierFiche";
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
        fiches: [],
        filter: "",
        consultation: {
          description: "",
          ordonnance: "",
          prix: ""
        }
      };
      this.CreateFichePatient = this.CreateFichePatient.bind(this);
      this.updateFiche = this.updateFiche.bind(this);
      this.AddConsultation = this.AddConsultation.bind(this);
    }
  }
  handleChange(e) {
    const fiche = this.state.fiche;
    fiche[e.target.name] = e.target.value;
    this.setState({ fiche });
  }

  onChangeConsultation = e => {
    let consultation = this.state.consultation;
    consultation[e.target.name] = e.target.value;
    this.setState({ consultation });
  };

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

  async CreateFichePatient(history) {
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

    this.setState({ patients }, () => {
      history.push("/");
    });
  }

  modifierFiche = (history, idPatient) => {
    const patient = this.state.patients.filter(el => el._id === idPatient)[0];
    let fiche, contactUrgence;
    if (patient && patient.fiche) fiche = patient.fiche;
    if (fiche && fiche.contactUrgence) contactUrgence = fiche.contactUrgence;
    const Newfiche = {
      allegries: fiche.allegries,
      medicinsAnterieurs: fiche.medicinsAnterieurs,
      chroniques: fiche.chroniques,
      allegriesMedicaments: fiche.allegriesMedicaments,
      contact_nomPrenom: contactUrgence.contact_nomPrenom,
      contact_lienParente: contactUrgence.contact_lienParente,
      contact_telephone: contactUrgence.contact_telephone,
      nomPrenom: patient.nomPrenom,
      telephone: patient.telephone,
      age: patient.age,
      assuranceMedicale: patient.assuranceMedicale,
      adresse: patient.adresse
    };
    this.setState({ fiche: Newfiche }, () => {
      history.push("/modifierFiche/" + patient._id);
    });
  };

  async updateFiche(history, idPatient) {
    const allegries = this.state.fiche.allegries;
    const medicinsAnterieurs = this.state.fiche.medicinsAnterieurs;
    const chroniques = this.state.fiche.chroniques;
    const allegriesMedicaments = this.state.fiche.allegriesMedicaments;
    const contact_nomPrenom = this.state.fiche.contact_nomPrenom;
    const contact_lienParente = this.state.fiche.contact_lienParente;
    const contact_telephone = this.state.fiche.contact_telephone;
    const nomPrenom = this.state.fiche.nomPrenom;
    const telephone = this.state.fiche.telephone;
    const age = this.state.fiche.age;
    const assuranceMedicale = this.state.fiche.assuranceMedicale;
    const adresse = this.state.fiche.adresse;

    await axios.put("http://localhost:7000/patient", {
      id: idPatient,
      nomPrenom,
      age,
      assuranceMedicale,
      adresse,
      telephone
    });

    const idFiche = this.state.patients.filter(el => el._id === idPatient)[0]
      .fiche._id;

    const fiche = await axios.put("http://localhost:7000/fiche", {
      id: idFiche,
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

    console.log(fiche);

    history.push(`/fiche/${idPatient}`);

    // console.log(patient);
  }
  async AddConsultation(idFiche) {
    const consultation = await axios.post(
      "http://localhost:7000/consultation",
      {
        idFiche,
        description: this.state.consultation.description,
        ordonnance: this.state.consultation.ordonnance,
        prix: this.state.consultation.prix
      }
    );

    console.log(consultation);

    let fiches = await axios.get("http://localhost:7000/fiche");
    fiches = fiches.data;
    this.setState({ fiches });
  }

  componentDidMount() {
    axios
      .get("http://localhost:7000/patient")
      .then(res => this.setState({ patients: res.data }))
      .catch(err => console.log(err.message));

    axios
      .get("http://localhost:7000/fiche")
      .then(res => this.setState({ fiches: res.data }))
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
              return (
                <FichePatient
                  {...props}
                  patients={this.state.patients}
                  modifierFiche={this.modifierFiche}
                />
              );
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
                  fiche={this.state.fiche}
                />
              );
            }}
          />

          <Route
            path="/modifierFiche/:id"
            render={props => {
              return (
                <ModifierFiche
                  {...props}
                  updateFiche={this.updateFiche}
                  fiche={this.state.fiche}
                  onChange={this.handleChange.bind(this)}
                />
              );
            }}
          />

          <Route
            path="/consultations/:id"
            render={props => {
              return (
                <Consultations
                  {...props}
                  fiches={this.state.fiches}
                  AddConsultation={this.AddConsultation}
                  onChange={this.onChangeConsultation}
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

const ToCreateFiche = withRouter(({ history }) => (
  <h1 onClick={history.push("/createFiche")}>+</h1>
));
export default App;
