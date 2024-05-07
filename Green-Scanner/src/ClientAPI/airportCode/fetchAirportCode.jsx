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
    const matchingAirports = airports.filter(
      (airport) =>
        airport.attributes.name.toLowerCase().includes(userInput) ||
        airport.attributes.iata.toLowerCase() === userInput ||
        airport.attributes.icao.toLowerCase() === userInput
    );

    if (matchingAirports.length === 0) {
      throw new Error("Airport not found");
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
