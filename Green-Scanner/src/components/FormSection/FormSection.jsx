import React, { useState } from "react";
import "./formsection.css";
import Form from "../Form/Form";
import ResultModal from "../ResultModal/ResultModal";

const FormSection = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      id="calculate"
      className="form-section bg-primary flex justify-center items-center"
    >
      {showModal ? (
        <ResultModal setShowModal={setShowModal} />
      ) : (
        <Form onSubmit={setShowModal} />
      )}
    </div>
  );
};

export default FormSection;
