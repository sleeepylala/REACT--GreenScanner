import fetchAirportCode from "./fetchAirportCode";

const handleFetchAirport = async (params) => {
  try {
    const result = await fetchAirportCode(params);
    return result;
  } catch (error) {
    console.log("try again: ", error);
  }
};

export default handleFetchAirport;
