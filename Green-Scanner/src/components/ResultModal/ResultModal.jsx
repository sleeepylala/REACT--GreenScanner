import React from "react";
import "./resultmodal.css";
import { AiOutlineArrowLeft } from "react-icons/ai";

const ResultModal = () => {
  return (
    <div className="form-section bg-primary flex  justify-center items-center">
      <form className="flex justify-center flex-col items-center ">
        <div className=" container-text  flex flex-wrap -mx-3 mb-6 flex-col items-center ">
          <h1 className="font-bold font-red-hat-display  text-primary mb-3 text-2xl ">
            {" "}
            YOUR RESULTS
          </h1>
          <h2 className="text-white font-red-hat-display text-lg">
            Here is the footprint of your flight
          </h2>
        </div>
        <div className="container-results mt-7">
          <h1 className="font-bold font-red-hat-display text-4xl text-primary">
            CO₂ amount : 20 t
          </h1>
        </div>
        <div className="container-btn-result mt-14 flex flex-row items-center">
          <AiOutlineArrowLeft
            style={{
              color: "#00BFA6",
            }}
          />
          <button className=" ms-3 rounded-full text-white font-red-hat-display">
            calculate again
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResultModal;
