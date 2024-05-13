import axios from "axios";
import { APIAirportKey } from "../../../enviroment";

const fetchAirportCode = async (searchParams) => {
  const headers = {
    Authorization: `Bearer token=${APIAirportKey}`,
  };

  try {
    // Eseguire le tre chiamate API in parallelo utilizzando Promise.all
    const [response1, response2, response3, response4, response5] =
      await Promise.all([
        axios.get("https://airportgap.com/api/airports", {
          headers,
          params: searchParams,
        }),
        axios.get("https://airportgap.com/api/airports?page=2", {
          headers,
          params: searchParams,
        }),
        axios.get("https://airportgap.com/api/airports?page=3", {
          headers,
          params: searchParams,
        }),
        axios.get("https://airportgap.com/api/airports?page=4", {
          headers,
          params: searchParams,
        }),
        axios.get("https://airportgap.com/api/airports?page=5", {
          headers,
          params: searchParams,
        }),
      ]);

    // Ottenere i dati dalle risposte
    const airports1 = response1.data.data;
    const airports2 = response2.data.data;
    const airports3 = response3.data.data;
    const airports4 = response4.data.data;
    const airports5 = response5.data.data;

    // Unire i risultati in un unico array
    const allAirports = [
      ...airports1,
      ...airports2,
      ...airports3,
      ...airports4,
      ...airports5,
    ];

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
    console.log("Error fetching airport info:", error);
    throw error;
  }
};

export default fetchAirportCode;
