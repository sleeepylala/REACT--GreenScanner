import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import InfoSection from "./components/Section Info/InfoSection";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <InfoSection />
    </div>
  );
}

export default App;
