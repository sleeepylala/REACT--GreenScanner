import React, { useState } from "react";
import "./form.css";
import Button from "../Button";
import { BsFillPeopleFill } from "react-icons/bs";
import handleFetchAirport from "../../ClientAPI/airportCode/handleFetchAirport";
import naturalCompare from "natural-compare-lite";

const Form = ({ onSubmit }) => {
  const [numberPassengers, setNumberPassengers] = useState(1);
  const [classPassenger, setClassPassenger] = useState("Economy");
  const [airportOriginName, setAirportOriginName] = useState("");
  const [airportOriginCode, setAirportOriginCode] = useState("");
  const [airportDestinationName, setAirportDestinationName] = useState("");
  const [airportDestinationCode, setAirportDestinationCode] = useState("");
  const [originError, setOriginError] = useState(false);
  const [destinationError, setDestinationError] = useState(false);
  const [filteredAirports, setFilteredAirports] = useState([]);
  const [showOriginAirports, setShowOriginAirports] = useState(false);
  const [showDestinationAirports, setShowDestinationAirports] = useState(false);

  const handleSubmit = () => {
    // Validazione dei campi
    if (!airportOriginCode) {
      setOriginError(true);
      return;
    } else {
      setOriginError(false);
    }

    if (!airportDestinationCode) {
      setDestinationError(true);
      return;
    } else {
      setDestinationError(false);
    }

    const params = {
      "segments[0][origin]": airportOriginCode,
      "segments[0][destination]": airportDestinationCode,
      cabin_class: classPassenger.toLowerCase(),
      currencies: ["SEK", "USD"],
    };

    onSubmit(params, numberPassengers);
  };

  const handleNumberPassengersChange = (e) => {
    const value = parseInt(e.target.value);
    setNumberPassengers(value);
    console.log(value);
  };
  const handleClassPassengersChange = (e) => {
    const valueClass = e.target.value;
    setClassPassenger(valueClass);
    console.log(valueClass);
  };

  const handleOriginChange = async (e) => {
    const valueAirportOrigin = e.target.value.toLowerCase();
    setAirportOriginName(valueAirportOrigin);
    setShowOriginAirports(true);
    setShowDestinationAirports(false);
    try {
      const airports = await handleFetchAirport({ name: valueAirportOrigin });
      // Ordina gli aeroporti in base alla loro somiglianza con la stringa inserita dall'utente
      airports.sort((a, b) => naturalCompare(a.name, b.name));
      setFilteredAirports(airports);
    } catch (error) {
      console.error("Error fetching airports:", error);
      setFilteredAirports([]);
    }
  };

  const handleDestinationChange = async (e) => {
    const valueAirportDestination = e.target.value.toLowerCase();
    setAirportDestinationName(valueAirportDestination);
    setShowOriginAirports(false);
    setShowDestinationAirports(true);
    try {
      const airports = await handleFetchAirport({
        name: valueAirportDestination,
      });
      airports.sort((a, b) => naturalCompare(a.name, b.name));
      setFilteredAirports(airports);
    } catch (error) {
      console.error("Error fetching airports:", error);
      setFilteredAirports([]);
    }
  };

  // Funzione per impostare il nome e il codice dell'aeroporto di origine
  const handleSelectOrigin = (airport) => {
    setAirportOriginName(airport.name);
    setAirportOriginCode(airport.code);
    setFilteredAirports([]); // Nascondi la lista dei suggerimenti dopo la selezione
  };

  // Funzione per impostare il nome e il codice dell'aeroporto di destinazione
  const handleSelectDestination = (airport) => {
    setAirportDestinationName(airport.name);
    setAirportDestinationCode(airport.code);
    setFilteredAirports([]); // Nascondi la lista dei suggerimenti dopo la selezione
  };

  return (
    <form className="">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-primary text-lg font-bold mb-2"
            htmlFor="grid-first-name"
          >
            FROM :
          </label>
          <input
            className={`appearance-none rounded-full block w-full bg-gray-200 text-gray-700 border ${
              originError ? "border-red-500" : "border-gray-200"
            } py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
            id="grid-first-name"
            type="search"
            placeholder="Airport Name"
            autoComplete="off"
            value={airportOriginName}
            onChange={handleOriginChange}
          />

          {showOriginAirports && filteredAirports.length > 0 && (
            <div className="absolute z-10 bg-white mt-1 p-2 border border-gray-300 rounded  shadow-lg max-h-40 overflow-auto">
              {filteredAirports.map((airport, index) => (
                <div
                  key={index}
                  onClick={() => handleSelectOrigin(airport)}
                  className="cursor-pointer py-1 hover:bg-gray-100"
                >
                  {airport.name}
                </div>
              ))}
            </div>
          )}
        </div>
        {originError && (
          <p className="text-red-500 text-xs italic">
            Please fill out this field.
          </p>
        )}
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-primary  text-lg font-bold mb-2"
            htmlFor="grid-last-name"
          >
            TO :
          </label>
          <input
            className={`appearance-none rounded-full block w-full bg-gray-200 text-gray-700 border ${
              destinationError ? "border-red-500" : "border-gray-200"
            } py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
            id="grid-last-name"
            type="search"
            placeholder="Airport Name"
            autoComplete="off"
            value={airportDestinationName}
            onChange={handleDestinationChange}
          />
          {showDestinationAirports && filteredAirports.length > 0 && (
            <div className="absolute z-10 bg-white mt-1 p-2 border border-gray-300 rounded  w-auto shadow-lg max-h-40 overflow-auto">
              {filteredAirports.map((airport, index) => (
                <div
                  key={index}
                  onClick={() => handleSelectDestination(airport)}
                  className="cursor-pointer py-1 hover:bg-gray-100"
                >
                  {airport.name}
                </div>
              ))}
            </div>
          )}
        </div>
        {destinationError && (
          <p className="text-red-500 text-xs italic">
            Please fill out this field.
          </p>
        )}
      </div>

      <div className="flex flex-row justify-between mt-10">
        <div className="flex flex-row justify-center items-center relative  px-3">
          <select className="block appearance-none w-full bg-transparent border-none text-white rounded focus:outline-none focus:border-gray-500 pr-8">
            <option>Round trip</option>
            <option>One-way trip</option>
          </select>
        </div>
        <div className="flex flex-row justify-center items-center relative  px-3">
          <select
            className="block appearance-none w-full bg-transparent border-none text-white rounded focus:outline-none focus:border-gray-500 pr-8"
            id="grid-city"
            value={classPassenger}
            onChange={handleClassPassengersChange}
          >
            <option>Economy</option>
            <option>First</option>
            <option>Business</option>
          </select>
        </div>

        <div className="flex flex-row justify-center items-center relative px-3">
          <BsFillPeopleFill
            style={{
              color: "#00BFA6",
            }}
          />
          <input
            type="number"
            value={numberPassengers}
            onChange={handleNumberPassengersChange}
            className="block appearance-none w-20 bg-transparent border-none text-white rounded focus:outline-none focus:border-gray-500 "
            placeholder="1"
          />
        </div>
      </div>

      <div className="container-btn-form flex justify-center items-center mt-10">
        <Button href="#results" onSubmit={handleSubmit} />
      </div>
    </form>
  );
};

export default Form;
