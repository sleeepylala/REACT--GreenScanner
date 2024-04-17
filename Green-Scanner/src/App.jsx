import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import InfoSection from "./components/Section Info/InfoSection";
import SupportSection from "./components/Section Support/SupportSection";
import FormSection from "./components/FormSection/FormSection";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container-wrapper">
        <Home />
        <InfoSection />
        <SupportSection />
        <FormSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
