import React from "react";
import FetchFootprint from "./fetchFootprint";

const handleFetchFootprint = async (setShowModal, setFootprintResult) => {
  try {
    const result = await FetchFootprint();
    setFootprintResult(result);
    setShowModal(true);
  } catch (error) {
    console.log("try again: ", error);
  }
};

export default handleFetchFootprint;
