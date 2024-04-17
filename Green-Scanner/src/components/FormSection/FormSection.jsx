import React, { useState } from "react";
import "./formsection.css";
import Form from "../Form/Form";
import ResultModal from "../ResultModal/ResultModal";
import handleFetchFootprint from "../../ClientAPI/footprint/handleFetchFootprint";

const FormSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [footprintResult, setFootprintResult] = useState(null);

  return (
    <div
      id="calculate"
      className="form-section bg-primary flex justify-center items-center"
    >
      {showModal ? (
        <ResultModal
          setShowModal={setShowModal}
          footprintResult={footprintResult}
        />
      ) : (
        <Form
          onSubmit={() =>
            handleFetchFootprint(setShowModal, setFootprintResult)
          }
        />
      )}
    </div>
  );
};

export default FormSection;
