import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import CreateFichePatient from "./components/CreateFichePatient";
import FichePatient from "./components/FichePatient";
import Footer from "./components/Footer";
import Consultation from "./components/Consultations";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <SearchBar />
        <Consultation day="23" month="OCT" year="2018" Hour="09:30" />
        <FichePatient patient="Ali ben Amor" nom="Ali ben Amor" />
        <Footer />
      </div>
    );
  }
}

export default App;
