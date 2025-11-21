import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import TrustedCompanies from "./components/TrustedCompanies";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Courses />
      <TrustedCompanies />
    </div>
  );
}

export default App;
