import axios from "axios";
import { APIAirportKey } from "../../../enviroment";

const fetchAirportCode = async (searchParams) => {
  const headers = {
    Authorization: `Bearer token=${APIAirportKey}`,
  };

  try {
    const response = await axios.get("https://airportgap.com/api/airports", {
      headers,
      params: searchParams,
    });

    const response2 = await axios.get(
      "https://airportgap.com/api/airports?page=2",
      {
        headers,
        params: searchParams,
      }
    );

    const response3 = await axios.get(
      "https://airportgap.com/api/airports?page=3",
      {
        headers,
        params: searchParams,
      }
    );

    // Attendere che tutte le chiamate siano complete e ottenere i dati
    const airports = response.data.data;
    const airports2 = response2.data.data;
    const airports3 = response3.data.data;

    // Unire i risultati in un unico array
    const allAirports = airports.concat(airports2, airports3);

    const userInput = searchParams.name ? searchParams.name.toLowerCase() : "";
    const matchingAirports = allAirports.filter(
      (airport) =>
        airport.attributes.name.toLowerCase().includes(userInput) ||
        airport.attributes.iata.toLowerCase() === userInput ||
        airport.attributes.icao.toLowerCase() === userInput
    );

    if (matchingAirports.length === 0) {
      console.log("Airport not found");
    }
    // Estrai il codice e il nome dell'aeroporto dall'aeroporto corrispondente trovato
    const airportInfo = matchingAirports.map((airport) => ({
      code: airport.attributes.iata,
      name: airport.attributes.name,
    }));
    return airportInfo;
  } catch (error) {
    console.error("Error fetching airport info:", error);
    throw error;
  }
};

export default fetchAirportCode;
