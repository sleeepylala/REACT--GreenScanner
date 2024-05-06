import React, { useState } from "react";
import "./form.css";
import Button from "../Button";
import { BsFillPeopleFill } from "react-icons/bs";
import handleFetchAirport from "../../ClientAPI/airportCode/handleFetchAirport";

const Form = ({ onSubmit }) => {
  const [numberPassengers, setNumberPassengers] = useState(1);
  const [classPassenger, setClassPassenger] = useState("Economy");
  const [airportOrigin, setAirportOrigin] = useState("");
  const [airportDestination, setAirportDestination] = useState("");
  const [originError, setOriginError] = useState(false);
  const [destinationError, setDestinationError] = useState(false);

  const handleSubmit = async (e) => {
    // Validazione dei campi
    if (!airportOrigin) {
      setOriginError(true);
      return;
    } else {
      setOriginError(false);
    }

    if (!airportDestination) {
      setDestinationError(true);
      return;
    } else {
      setDestinationError(false);
    }

    // Recupera il codice dell'aeroporto per l'aeroporto di origine
    const originAirportCode = await handleFetchAirport({ name: airportOrigin });

    // Recupera il codice dell'aeroporto per l'aeroporto di destinazione
    const destinationAirportCode = await handleFetchAirport({
      name: airportDestination,
    });

    const params = {
      "segments[0][origin]": originAirportCode,
      "segments[0][destination]": destinationAirportCode,
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

  const handleOriginChange = (e) => {
    const valueAirportOrigin = e.target.value;
    setAirportOrigin(valueAirportOrigin);
    console.log(valueAirportOrigin);
  };

  const handleDestinationChange = (e) => {
    const valueAirportDestination = e.target.value;
    setAirportDestination(valueAirportDestination);
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
            type="text"
            placeholder="Airport Name"
            value={airportOrigin}
            onChange={handleOriginChange}
          />
          {originError && (
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          )}
        </div>
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
            type="text"
            placeholder="Airport Name"
            value={airportDestination}
            onChange={handleDestinationChange}
          />
          {destinationError && (
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          )}
        </div>
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
