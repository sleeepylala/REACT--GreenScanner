import React, { useState } from "react";
import "./formsection.css";
import Form from "../Form/Form";
import ResultModal from "../ResultModal/ResultModal";
import handleFetchFootprint from "../../ClientAPI/footprint/handleFetchFootprint";

const FormSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [footprintResult, setFootprintResult] = useState(null);
  const [numberPassengers, setNumberPassengers] = useState(1);

  const handleFormSubmit = (numberPassengers) => {
    setNumberPassengers(numberPassengers);
    handleFetchFootprint(setShowModal, setFootprintResult);
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
