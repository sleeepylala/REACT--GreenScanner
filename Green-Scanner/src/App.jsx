import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import InfoSection from "./components/Section Info/InfoSection";
import SupportSection from "./components/Section Support/SupportSection";
import FormSection from "./components/FormSection/FormSection";
import Footer from "./components/Footer/Footer";

import ResultModal from "./components/ResultModal/ResultModal";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <InfoSection />
      <SupportSection />
      <FormSection />
      <ResultModal />
      <Footer />
    </div>
  );
}

export default App;
