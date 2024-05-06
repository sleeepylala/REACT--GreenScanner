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

    // Trova l'aeroporto corrispondente al valore inserito dall'utente
    const airports = response.data.data;
    const userInput = searchParams.name ? searchParams.name.toLowerCase() : "";
    const matchingAirport = airports.find(
      (airport) =>
        airport.attributes.name.toLowerCase().includes(userInput) ||
        airport.attributes.iata.toLowerCase() === userInput ||
        airport.attributes.icao.toLowerCase() === userInput
    );

    if (!matchingAirport) {
      throw new Error("Airport not found");
    }

    // Estrai il codice dell'aeroporto dall'aeroporto corrispondente trovato
    const airportCode = matchingAirport.attributes.iata;

    return airportCode;
  } catch (error) {
    console.error("Error fetching airport code:", error);
    throw error;
  }
};

export default fetchAirportCode;
