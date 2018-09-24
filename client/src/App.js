import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import CreateFichePatient from "./components/CreateFichePatient";
import FichePatient from "./components/FichePatient";
import Footer from "./components/Footer";
import Consultation from "./components/Consultations";
import AddConsultation from "./components/AddConsultation";

import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        fiche: { date: "", patient: "", tel: "", birth: "", Num_ass_med: "", address: "", nom_contact: "", Lien: "", tel_contact: "", Allergies: "", maladies_chr: "", Allergies_medica: "", medecins_anter: "" },

      };
    }
  }
  handleChange(e) {
    const fiche = this.state.fiche;
    fiche[e.target.name] = e.target.value;
    this.setState({ fiche });
  }

  handleClick() {
    console.log("envoyer ceci vers bd")
    console.log(this.state.fiche)
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <SearchBar />

        <Consultation patient="Ali ben Amor" day="23" month="OCT" year="2018" Hour="09:30" description=" mridh fi 7ala" />
        <AddConsultation />
        <CreateFichePatient onChange={this.handleChange.bind(this)} onClick={this.handleClick.bind(this)} />
        <FichePatient patient={this.state.patient}
          fiche={this.state.fiche}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
