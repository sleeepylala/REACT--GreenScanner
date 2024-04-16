import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import InfoSection from "./components/Section Info/InfoSection";
import SupportSection from "./components/Section Support/SupportSection";
import FormSection from "./components/FormSection/FormSection";
import Footer from "./components/Footer/Footer";

import "./App.css";
import FetchFootprint from "./ClientAPI/footprint/fetchFootprint";

function App() {
  useEffect(() => {
    FetchFootprint();
  }, []);
  return (
    <div>
      <Navbar />
      <Home />
      <InfoSection />
      <SupportSection />
      <FormSection />

      <Footer />
    </div>
  );
}

export default App;
