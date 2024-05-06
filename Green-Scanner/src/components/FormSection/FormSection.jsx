import React, { useState } from "react";
import "./formsection.css";
import Form from "../Form/Form";
import ResultModal from "../ResultModal/ResultModal";
import handleFetchFootprint from "../../ClientAPI/footprint/handleFetchFootprint";
import handleFetchAirport from "../../ClientAPI/airportCode/handleFetchAirport";

const FormSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [footprintResult, setFootprintResult] = useState(null);
  const [numberPassengers, setNumberPassengers] = useState(1);

  // La funzione handleFormSubmit ora prende solo params
  const handleFormSubmit = (params, numberPassengers) => {
    setNumberPassengers(numberPassengers);
    handleFetchFootprint(params, setShowModal, setFootprintResult);
    handleFetchAirport(params);
  };

  return (
    <div
      id="calculate"
      className="form-section bg-primary flex justify-center items-center"
    >
      {showModal ? (
        <ResultModal
          setShowModal={setShowModal}
          footprintResult={footprintResult}
          numberPassengers={numberPassengers}
        />
      ) : (
        <Form onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default FormSection;
