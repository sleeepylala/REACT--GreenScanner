import React, { useEffect, useState } from "react";
import "./form.css";
import Button from "../Button";
import { BsFillPeopleFill } from "react-icons/bs";
import handleFetchAirport from "../../ClientAPI/airportCode/handleFetchAirport";
import naturalCompare from "natural-compare-lite";
import { Select } from "antd";

const Form = ({ onSubmit }) => {
  const [numberPassengers, setNumberPassengers] = useState(1);
  const [classPassenger, setClassPassenger] = useState("Economy");

  const [airportOriginName, setAirportOriginName] = useState("");
  const [airportOriginCode, setAirportOriginCode] = useState("");
  const [airportDestinationName, setAirportDestinationName] = useState("");
  const [airportDestinationCode, setAirportDestinationCode] = useState("");

  const [originError, setOriginError] = useState(false);
  const [destinationError, setDestinationError] = useState(false);

  const [searchValue, setSearchValue] = useState("");
  const [optionsSearch, setOptionsSearch] = useState([]);
  const [destinationValue, setDestinationValue] = useState("");
  const [optionsDestination, setOptionsDestination] = useState([]);

  const handleSearch = async (value) => {
    const valueAirportOrigin = value.toLowerCase();
    const valueCity = value.toLowerCase();
    try {
      const airports = await handleFetchAirport({
        name: valueAirportOrigin,
        city: valueCity,
      });
      // Ordina gli aeroporti in base alla loro somiglianza con la stringa inserita dall'utente
      airports.sort((a, b) => naturalCompare(a.name, b.name));
      const airportOptions = airports.map((airport) => ({
        value: airport.code,
        label: airport.name,
      }));
      setOptionsSearch(airportOptions);
      setSearchValue(airportOptions);
    } catch (error) {
      console.log("Error fetching airports:", error);
    }
  };

  const handleDestination = async (value) => {
    const valueAirportOrigin = value.toLowerCase();
    try {
      const airports = await handleFetchAirport({ name: valueAirportOrigin });
      // Ordina gli aeroporti in base alla loro somiglianza con la stringa inserita dall'utente
      airports.sort((a, b) => naturalCompare(a.name, b.name));
      const airportOptions = airports.map((airport) => ({
        value: airport.code,
        label: airport.name,
      }));
      setOptionsDestination(airportOptions);
      setDestinationValue(airportOptions);
    } catch (error) {
      console.log("Error fetching airports:", error);
    }
  };

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
    const value = e.target.value;
    setNumberPassengers(value);
  };
  const handleClassPassengersChange = (e) => {
    const valueClass = e.target.value;
    setClassPassenger(valueClass);
  };

  const handleSelectDeparture = (airport) => {
    setAirportOriginName(airport.label);
    setAirportOriginCode(airport.value);
  };

  // Funzione per impostare il nome e il codice dell'aeroporto di destinazione
  const handleSelectDestination = (airport) => {
    setAirportDestinationName(airport.label);
    setAirportDestinationCode(airport.value);
  };

  return (
    <form className="">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-primary text-lg font-bold mb-2">
            FROM :
          </label>
          <Select
            showSearch
            style={{ width: "100%" }}
            placeholder="Departure Airport"
            optionFilterProp="label"
            filterOption={false}
            value={airportOriginName || undefined}
            onSearch={handleSearch}
            options={optionsSearch}
            notFoundContent={
              <span style={{ color: "#999" }}>Airport not found</span>
            }
            onChange={(value, option) => {
              handleSelectDeparture(option);
              setAirportOriginName(value);
            }}
          />
          {originError && (
            <div className="flex">
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
          )}
        </div>

        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-primary  text-lg font-bold mb-2">
            TO :
          </label>

          <Select
            showSearch
            style={{ width: "100%" }}
            placeholder="Destination Airport"
            filterOption={false}
            notFoundContent={
              <span style={{ color: "#999" }}>Airport not found</span>
            }
            value={airportDestinationName || undefined}
            onSearch={handleDestination}
            options={optionsDestination}
            onChange={(value, option) => {
              handleSelectDestination(option);
              setAirportDestinationName(value);
            }}
          />
          {destinationError && (
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap flex-row justify-between mt-10 space-y-5">
        <div className="flex flex-row justify-center items-center relative ">
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
