import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Feedback from "./components/Feedback";

function App(id) {
 


  return (
    <div className="App">
      <Navbar className="navbar" />
      <Header />
      <Feedback />
    </div>
  );
}

export default App;
