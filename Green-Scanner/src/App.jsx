import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import InfoSection from "./components/Section Info/InfoSection";
import SupportSection from "./components/Section Support/SupportSection";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <InfoSection />
      <SupportSection />
    </div>
  );
}

export default App;
