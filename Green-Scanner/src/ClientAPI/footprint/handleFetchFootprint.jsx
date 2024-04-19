import React from "react";
import FetchFootprint from "./fetchFootprint";

const handleFetchFootprint = async (
  params,
  setShowModal,
  setFootprintResult
) => {
  try {
    const result = await FetchFootprint(params);
    setFootprintResult(result);
    setShowModal(true);
  } catch (error) {
    console.log("try again: ", error);
  }
};

export default handleFetchFootprint;
